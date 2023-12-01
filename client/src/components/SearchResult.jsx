import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';
import MovieContainer from './MovieContainer';
function SearchResult(props) {
  const key = import.meta.env.VITE_API_KEY;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let selectionsArray = [];

      if (props.keywords) {
        selectionsArray.push('&with_keywords=');
        const keywordsList = props.keywords.split(',');
        const keywordPromises = keywordsList.map(async (word) => {
          const response = await fetch(
            `https://api.themoviedb.org/3/search/keyword?api_key=${key}&query=${word}&page=1`
          );
          const data = await response.json();
          selectionsArray.push(data.results[0]?.id.toString());
        });

        await Promise.all(keywordPromises);
      }

      if (props.actors) {
        selectionsArray.push('&with_cast=');
        const castList = props.actors.split(',');
        const castPromises = castList.map(async (word) => {
          const response = await fetch(
            `https://api.themoviedb.org/3/search/person?api_key=${key}&query=${word}&page=1`
          );
          const data = await response.json();
          selectionsArray.push(data.results[0]?.id.toString());
        });

        await Promise.all(castPromises);
      }

      if (props.genres) {
        selectionsArray.push('&with_genres=');
        props.genres.forEach(genre => {
          selectionsArray.push(",".concat(genre));
        })
      }

      var finalSelections = selectionsArray.join(',');
      finalSelections = finalSelections.replaceAll("=,","=");
      finalSelections = finalSelections.replaceAll(",&","&");
      console.log(finalSelections);

      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc${finalSelections}`)
        .then((response) => response.json())
        .then((data) => {
          const newMovies = data.total_results === 0
            ? [<p>No Results</p>]
            : data.results.map((result) => (
                <MovieCard
                  key={result.id}
                  apiId={result.id}
                  posterPath={result.poster_path}
                  title={result.title}
                />
              ));

          setMovies(newMovies);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    if (props.keywords || props.actors || props.genres) {
      fetchData();
    }

  }, [props.keywords, props.actors, props.genres, key]);

  return <div className='movieContainer'>{movies}</div>;
}
//kneecaps are a privilege not a right

export default SearchResult;