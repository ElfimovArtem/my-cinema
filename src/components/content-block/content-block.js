import React from 'react';
import { Movies } from '../../modules';
import { moviesList } from '../../constants';
import './content-block-styles.scss'

export const ContentBlock = () => (
  <div className="content">
    <h2 className="content__title">Selection of films</h2>
    <Movies movieList={ moviesList } />
  </div>
);
