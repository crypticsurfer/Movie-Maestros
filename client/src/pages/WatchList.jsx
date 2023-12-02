import MovieCard from '../components/MovieCard';
import SearchResult from '../components/SearchResult';


function WatchList() {
  return (
    <div className='main-container'>
      <h1 className='pageTitle'>My Watch List</h1>
      <div className='movieContainer'>
      <div className='movieCard'>
                <MovieCard/>
      </div>

      </div>
    </div>

  )
}

export default WatchList;