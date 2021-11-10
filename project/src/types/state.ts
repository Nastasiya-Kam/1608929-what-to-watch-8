import {Film, Films} from './films';
import {AuthorizationStatus} from '../const';

type State = {
  currentGenre: string,
  films: Films,
  currentFilm: Film,
  authorizationStatus: AuthorizationStatus,
};

export type {State};
