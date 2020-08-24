import React from 'react';
import { Movie } from '../components/movie';

export const Movies = (moviesList) => {
  const arr = moviesList.movieList.movies;
  return (
    <div className="content__container">
      {
        Array.isArray(arr) ? arr.map(movie => (
            <Movie key={movie.id} title={movie.name} imgUrl={movie.images[0]} />
          )
        ) : (
          <span className="warning-text">Sorry, films not found....</span>
        )
      }
    </div>
  );
};
