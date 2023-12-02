import React, { useState, useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { CHECK_MOVIE_IN_WATCHLIST } from '../utils/queries';
import { ADD_TO_WATCHLIST, REMOVE_FROM_WATCHLIST } from '../utils/mutations';
import { useNavigate } from 'react-router-dom';
import AuthService from '../utils/auth';

function MovieCard({ apiId, posterPath, title }) {
  const navigate = useNavigate();
  const [addToWatchlistMutation] = useMutation(ADD_TO_WATCHLIST);
  const [removeFromWatchlistMutation] = useMutation(REMOVE_FROM_WATCHLIST);
  const [isInWatchlist, setIsInWatchlist] = useState(false);

  const profile = AuthService.getProfile();

  const { loading, error, data, refetch } = useQuery(CHECK_MOVIE_IN_WATCHLIST, {
    variables: { userId: profile.data._id, apiId: apiId },
  });

  useEffect(() => {
    setIsInWatchlist(data?.checkMovieInWatchlist);
  }, [data]);

  const handleToggleWatchlist = () => {
    if (!AuthService.loggedIn) {
      navigate('/login');
      return;
    }

    let userId = AuthService.getProfile().data._id;
    setIsInWatchlist((prevIsInWatchlist) => !prevIsInWatchlist);

    if (!isInWatchlist) {
      addToWatchlist(apiId, userId);
    } else {
      removeFromWatchlist(apiId, userId);
    }
  };

  const addToWatchlist = async (movieApiId, userId) => {
    try {
      await addToWatchlistMutation({
        variables: { userId: userId, apiId: movieApiId },
      });
      refetch(); // Refetch the data after mutation
    } catch (error) {
      console.error('Error adding to watchlist:', error);
    }
  };

  const removeFromWatchlist = async (movieApiId, userId) => {
    try {
      await removeFromWatchlistMutation({
        variables: { userId: userId, apiId: movieApiId },
      });
      refetch(); // Refetch the data after mutation
    } catch (error) {
      console.error('Error removing from watchlist:', error);
    }
  };

  return (
    <div className='movieCard'>
      <img src={`https://image.tmdb.org/t/p/w185/${posterPath}`} alt={title} />
      <h3>{title}</h3>
      <button onClick={handleToggleWatchlist}>
        {isInWatchlist ? <p>Remove from Watchlist</p> : <p>Add to Watchlist</p>}
      </button>
    </div>
  );
}

export default MovieCard;