import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
// const buttonClick = require('./SearchResult')

function MovieCard(props){
    let poster = "https://image.tmdb.org/t/p/w185/".concat(props.posterPath);
    return(
        <div>
            <div className='movieCard'>
            <img className='movieImg' src={poster}></img>
            <p>{props.title}</p>
            </div>
        </div>
    )
}

export default MovieCard;