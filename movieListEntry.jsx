var MovieListEntry = ({movie, search}) => {

  var index = movie.title.toLowerCase().indexOf(search.toLowerCase());
  var first;
  var match;
  var rest;
  // console.log('search', search)

  if (index > 0) {
    first = movie.title.slice(0, index);
    match = movie.title.slice(index, index + search.length);
    rest =  movie.title.slice(index + search.length);
  } else if (index !== -1) {
    match = movie.title.slice(0, search.length);
    rest = movie.title.slice(search.length);
  } else {
    first = movie.title;
  }
  // console.log('index ', index)
  // console.log('first ', first)
  // console.log('match ', match)
  // console.log('rest ', rest)
  
  return (<tr className='movieListEntry'>
    <td className='title'>
      {first}
      <span className='match'>
      {match}
      </span>
      {rest}
    </td>
  </tr>
  )
}

window.movieListEntry = MovieListEntry;