import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import SearchResult from '../components/SearchResult';

const Home = () => {
  const [keywords, setKeywords] = useState('');
  const [actors, setActors] = useState('');
  const [genres, setGenres] = useState([]);
  const [searchClicked, setSearchClicked] = useState(false);

  const handleSearch = () => {
    setSearchClicked(true);
  };

  const handleSearchResultRender = () => {
    setSearchClicked(false);
  };

  const handleGenreChange = (genreId) => {
    const updatedGenres = genres.includes(genreId)
      ? genres.filter((selectedGenre) => selectedGenre !== genreId)
      : [...genres, genreId];

    setGenres(updatedGenres);
  };

  const genreOptions = [
    { id: '28', label: 'Action' },
    { id: '12', label: 'Adventure' },
    { id: '16', label: 'Animation' },
    { id: '35', label: 'Comedy' },
    { id: '80', label: 'Crime' },
    { id: '99', label: 'Documentary' },
    { id: '18', label: 'Drama' },
    { id: '10751', label: 'Family' },
    { id: '14', label: 'Fantasy' },
    { id: '36', label: 'History' },
    { id: '27', label: 'Horror' },
    { id: '10402', label: 'Music' },
    { id: '9648', label: 'Mystery' },
    { id: '10749', label: 'Romance' },
    { id: '878', label: 'Science Fiction' },
    { id: '10770', label: 'TV Movie' },
    { id: '53', label: 'Thriller' },
    { id: '10752', label: 'War' },
    { id: '37', label: 'Western' },
  ];

  return (
    <div>
      <div className='main-container'>
        <h1>Movie Maestros</h1>
        <p>you can separate multiple actors/keywords with a comma</p>
        <input
          placeholder='Keywords'
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
        />
        <input
          placeholder='Actors'
          value={actors}
          onChange={(e) => setActors(e.target.value)}
        />
        
       {genreOptions.map((genre) => (
          <div key={genre.id}>
            <label>
              <input
                type='checkbox'
                value={genre.id}
                checked={genres.includes(genre.id)}
                onChange={() => handleGenreChange(genre.id)}
              />
              {genre.label}
            </label>
          </div>
        ))}

        <button onClick={handleSearch}>SEARCH</button>
      </div>

      {searchClicked  && (
        <SearchResult keywords={keywords} actors={actors} genres={genres} onRender={handleSearchResultRender}/>
      )}
    </div>
  );
};

export default Home;