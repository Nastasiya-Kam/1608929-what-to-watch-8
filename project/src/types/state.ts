import {Film, Films} from './films';
import {AuthorizationStatus} from '../const';

type State = {
  currentGenre: string,
  films: Films,
  promoFilm: Film,
  currentFilm: Film,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
};

export type {State};
