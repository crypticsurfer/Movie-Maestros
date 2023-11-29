import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function MovieCard(props){
    let poster = "https://image.tmdb.org/t/p/w185/".concat(props.posterPath);
    return(
        <div>
            <img src={poster}></img>
            <p>{props.title}</p>
        </div>
    )
}

export default MovieCard;