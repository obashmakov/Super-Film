import { request } from './helpers';

export const getMovies = async(date) => {
  const movies = await request(`?country=US&date=${date}`);

  return movies;
};
