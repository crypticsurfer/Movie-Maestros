import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import SearchResult from '../components/SearchResult';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';


// import Dropdown from '../components/Dropdown';

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

  const theme = createTheme({
    palette: {
      primary: {
        main: blue[500],
      },
      secondary: {
        main: '#2979ff',
      },
    },
  });

  return (
    <div>
      <div className='main-container'>
        <h1 className='pageTitle'>Movie Maestros</h1>
        <p>you can separate multiple actors/keywords with a comma</p>

        <div className='homeInputContainer'>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" size="small" label="Keyword" variant="outlined" 
      value={keywords}
      onChange={(e) => setKeywords(e.target.value)}
      />
      <br></br>
      <TextField id="outlined-basic" size="small" label="Actor" variant="outlined" 
      value={actors}
      onChange={(e) => setActors(e.target.value)}
      />
      </Box>
        </div>
 

        {/* <Dropdown options={genreOptions} onSelect={handleGenreChange} /> */}
        {genreOptions.map((genre) => (
          <div key={genre.id}>
            <div>
              <div className='checkboxEl'>
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
            </div>


          </div>

        ))}

        {/* <button id='searchBtn' onClick={handleSearch}>SEARCH</button> */}
        <Stack direction="row" spacing={1}>
      <Button id='searchBtn' onClick={handleSearch} color="primary" variant="contained" size="large" startIcon={<SearchIcon />}>
        Search
      </Button>
      </Stack>
      </div>

      {searchClicked && (
        <SearchResult keywords={keywords} actors={actors} genres={genres} onRender={handleSearchResultRender} />
      )}
    </div>
  );
};

export default Home;




