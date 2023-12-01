import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';
import Box from '@mui/material/Box';

function MovieContainer(props) {
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
