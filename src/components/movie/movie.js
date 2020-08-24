import defaultPoster from '../../assets/no_poster.jpg';
import React from 'react';

export const Movie = (props) => (
  <div className="container__movie">
    <img
      className="container__movie-img"
      src={props.imgUrl || defaultPoster}
      alt="movie-poster"
    />
    <p className="container__movie-title">{props.title}</p>
  </div>
);
