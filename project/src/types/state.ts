import {Film, Films} from './films';
import {Comments} from './comment';
import {AuthorizationStatus} from '../const';

type State = {
  currentGenre: string,
  films: Films,
  comments: Comments,
  promoFilm: Film | null,
  currentFilm: Film | null,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  userMail: string,
};

export type {State};
