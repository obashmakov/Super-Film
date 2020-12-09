import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getMovies } from '../../api/movies';
import { Header } from '../Header';
import { Button } from './Button';
import { Movie } from './Movie';
import './MoviesList.scss';

export const MoviesList = ({ date, headerDate, setDate }) => {
  const [movies, setMovies] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [quantity, setQuantity] = useState(null);

  useEffect(() => {
    getMovies(date)
      .then((movie) => {
        if (movie.status === 422) {
          setMovies([]);
          setQuantity(null);
        } else if (!isClicked) {
          setMovies(movie.slice(0, 3));
          setQuantity(movie.length);
        } else {
          setMovies(movie);
        }
      });
  }, [date, isClicked]);

  return (
    <>
      <Header setDate={setDate} />
      <section className="movies">
        <div className="movies__date">
          {headerDate}
        </div>
        <div className="movies__container">
          {movies.length === 0 && (
            <p>
              No Data Available
            </p>
          )}
          {movies && (
            <ul className="movies__list">
              {movies.map(movie => (
                movie.show.image && (
                  <Movie
                    key={movie.id}
                    image={movie.show.image.medium}
                    name={movie.show.name}
                    year={movie.show.premiered}
                    season={movie.season}
                    episode={movie.number}
                  />
                )
              ))}
            </ul>
          )}
        </div>
        {!isClicked && quantity > 3 && (
          <Button setIsClicked={setIsClicked} quantity={quantity} />
        )}
      </section>
    </>
  );
};

MoviesList.propTypes = {
  date: PropTypes.string.isRequired,
  headerDate: PropTypes.string.isRequired,
  setDate: PropTypes.func.isRequired,
};
