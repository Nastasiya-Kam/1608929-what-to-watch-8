import {Film, Films} from './films';
import {Comments} from './comment';
import {AuthorizationStatus} from '../const';

type State = {
  currentGenre: string,
  films: Films,
  comments: Comments,
  promoFilm: Film,
  currentFilm: Film,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
};

export type {State};
