// var App = () => (
//   <div>
//     <div id='title'>MovieList</div>
//     <SearchBar />
//     <MovieList movies={window.movies} />
//   </div>
// )


class App extends React.Component {
  constructor (prop) {
    console.log('prop', prop);
    super(prop);
    this.state = {
      movies: [],
      search: ''
    }
  }

  handleSearch (input) {
    if (input === '') {
      this.setState({
        movies: [],
        search: ''
      })
    // } else if (input.indexOf(' ') !== -1) {
    //   input.split(' ')
    } else {
      var movies = this.props.movies;
      var filteredMovies = [];
      for (var i = 0; i < movies.length; i++) {
        var movie = movies[i].title;
        var spaceIdx = movie.split('').reduce((acc, letter, i) => {
          if (letter === ' '){
            return acc.concat([i]);
          }
          return acc;
        }, []);
        var inputLetters = input.split('');
        
        var firstMatch = inputLetters.every((letter, i) => {
          return letter === movie[i];
        });

        if (firstMatch) {
          filteredMovies.push(movie);
        } else {
          var found = false;
          for (var j = 0; j < spaceIdx.length; j++) {
            if (found) {
              continue;
            }
            var section = movie.slice(spaceIdx[j] + 1);
            var match = inputLetters.every((letter, i) => {
              return letter === section[i];
            });
            if (match) {
              found = true;
              filteredMovies.push(movie);
            }
          }
        }
      }
      
      // console.log(input.join(''))
      this.setState({
        movies: filteredMovies.length === 0 ? [{title: 'No Results'}] : filteredMovies,
        search: input
      });
    }
  }

  render () {
    return (
      <div>
        <div id='title'>MovieList</div>
        <SearchBar handleSearch={this.handleSearch.bind(this)}/>
        <MovieList movies={this.state.movies} search={this.state.search} />
      </div>
    )
  }
}

window.App = App;