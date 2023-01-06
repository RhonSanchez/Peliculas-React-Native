import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDBMoviesResponse} from '../interfaces/movieInterface';

interface MoviesStaste {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<MoviesStaste>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  const getMovies = async () => {
    const nowPlaying = movieDB.get<MovieDBMoviesResponse>('/now_playing');
    const popular = movieDB.get<MovieDBMoviesResponse>('/popular');
    const topRated = movieDB.get<MovieDBMoviesResponse>('/top_rated');
    const upcoming = movieDB.get<MovieDBMoviesResponse>('/upcoming');

    const resp = await Promise.all([nowPlaying, popular, topRated, upcoming]);

    setMoviesState({
      nowPlaying: resp[0].data.results,
      popular: resp[1].data.results,
      topRated: resp[2].data.results,
      upcoming: resp[3].data.results,
    });
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    ...moviesState,
    isLoading,
  };
};
