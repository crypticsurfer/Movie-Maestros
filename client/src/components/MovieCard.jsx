import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
// const buttonClick = require('./SearchResult')

function MovieCard(props){
    let poster = "https://image.tmdb.org/t/p/w185/".concat(props.posterPath);
    return(
        <div className='movieContainer'>
            <div className='movieCard'>
            <img src={poster}></img>
            <p>{props.title}</p>
            </div>
        </div>
    )
}

export default MovieCard;