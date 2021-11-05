import {Film} from './films';

type State = {
  currentGenre: string,
  films: Film[],
  currentFilm: Film,
};

export type {State};
