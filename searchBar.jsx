var SearchBar = ({handleSearch}) => (
  <div id='searchBar'>
    <input type='text' className='userInput' onChange={e => handleSearch(e.target.value)}/>
    <button id='searchBtn'>Go</button>
  </div>
)

window.SearchBar = SearchBar;