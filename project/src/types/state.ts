import {Film} from './films';
// import {AuthorizationStatus} from '../const';

type State = {
  currentGenre: string,
  films: Film[],
  currentFilm: Film,
  authorizationStatus: string,
};

export type {State};
