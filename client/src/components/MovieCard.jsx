import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { GET_USER_WATCHLIST } from '../utils/queries';
import { ADD_TO_WATCHLIST, REMOVE_FROM_WATCHLIST } from '../utils/mutations';

function MovieCard({ apiId, posterPath, title}) {
  // const [addToWatchlist] = useMutation(ADD_TO_WATCHLIST);
  // const [removeFromWatchlist] = useMutation(REMOVE_FROM_WATCHLIST);
  // const [getUserWatchlist] = useQuery(GET_USER_WATCHLIST);

  // const { loading, error, data } = useQuery(GET_USER_WATCHLIST, {
  //   variables: { userId },
  // });

  // const isInWatchlist = data.user.watchlist.some((item) => item.apiId === apiIdToCheck);

  // const handleToggleWatchlist = () => {
  //   if (isInWatchlist) {
  //     removeFromWatchlist({
  //       variables: { movieId: apiId },
  //       refetchQueries: [{ query: GET_USER_WATCHLIST }],
  //     });
  //   } else {
  //     addToWatchlist({
  //       variables: { movieId: apiId },
  //       refetchQueries: [{ query: GET_USER_WATCHLIST }],
  //     });
  //   }
  //  };


  // const handleToggleWatchlist = () => {
  //   let list = getUserWatchlist();

  // }

  let isInWatchlist = false;

  return (
    <div className='movieCard'>
      <img src={`https://image.tmdb.org/t/p/w185/${posterPath}`} alt={title} />
      <h3>{title}</h3>
      {isInWatchlist ? 
      <button onClick={addToWatchlist}>
        Watchlist
      </button> :
      <p>Watchlisted</p>}
    </div>
  );
}

export default MovieCard;