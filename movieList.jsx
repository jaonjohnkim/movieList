var MovieList = ({movies, search}) => (
  <table className='movieList'>
    <tbody>
    {
    movies.map((movie) => (
      <MovieListEntry movie={movie} key={movie.title} search={search}/>
    ))}
    </tbody>
  </table>
);

window.MovieList = MovieList;