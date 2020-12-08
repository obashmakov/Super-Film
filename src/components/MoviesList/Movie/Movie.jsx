import React from 'react';
import PropTypes from 'prop-types';
import './Movie.scss';

export const Movie = ({ image, name, year, season, episode }) => (
  <li className="movies__item">
    <img
      className="movies__image"
      src={image}
      alt="movie"
    />
    <div className="movies__description">
      <p className="movies__title">
        {name}
      </p>
      <p className="movies__year">
        {year.slice(0, 4)}
      </p>
      <div className="movies__info">
        <div className="movies__season">
          {`Season: ${season}`}
        </div>
        <div className="movies__episode">
          {`Episode: ${episode}`}
        </div>
      </div>
    </div>
  </li>
);

Movie.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  season: PropTypes.number.isRequired,
  episode: PropTypes.number.isRequired,
};
