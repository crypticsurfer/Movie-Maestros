import React from 'react';
import MovieCard from '../components/MovieCard';
import { useQuery } from '@apollo/client';
import { GET_USER_WATCHLIST } from '../utils/queries';
import AuthService from '../utils/auth';

function WatchList() {
  let username = AuthService.getProfile().data.username;
  console.log(username);
  const { loading, error, data } = useQuery(GET_USER_WATCHLIST, {
    variables: { username: username },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const watchlist = data?.user.watchlist || [];
  console.log(watchlist);

  return (
    <div className='main-container'>
      <h1 className='pageTitle'>My Watch List</h1>
      <div className='movieContainer'>
        {watchlist.map((movieId, index) => (
          <div key={index} className='movieCard'>
            <MovieCard apiId={movieId} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default WatchList;