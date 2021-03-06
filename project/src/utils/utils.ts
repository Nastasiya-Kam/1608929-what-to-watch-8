import {APIRoute, AuthorizationStatus, DEFAULT_GENRE, Grade, AppRouteChangeElement} from '../const';
import {Film, FilmId, Films} from '../types/films';

const getGrade = (rating: number): string | undefined => {
  if (rating < Grade.BAD.value) {
    return Grade.BAD.name;
  }

  if (rating < Grade.NORMAL.value && rating >= Grade.BAD.value) {
    return Grade.NORMAL.name;
  }

  if (rating < Grade.GOOD.value && rating >= Grade.NORMAL.value) {
    return Grade.GOOD.name;
  }

  if (rating < Grade.VERY_GOOD.value && rating >= Grade.GOOD.value) {
    return Grade.VERY_GOOD.name;
  }

  return Grade.AWESOME.name;
};

const getGenres = (films: Film[]): string[] => [DEFAULT_GENRE, ...new Set(films.map((film) => film.genre.split(' ').map((letter) => letter[0].toUpperCase() + letter.substring(1)).join('')))];

const getCurrentGenreFilms = (films: Film[], currentGenre: string): Film[] => {
  if (currentGenre !== DEFAULT_GENRE) {
    return films.filter((film) => film.genre.toUpperCase() === currentGenre.toUpperCase());
  }

  return films;
};

const getFilmsWithoutId = (films: Film[], currentFilm: Film | null): Film[] => currentFilm ? films.filter((element) => (currentFilm.id !== element.id)) : [];
const getFavoriteFilms = (films: Film[]): Film[] => films.filter((film) => film.isFavorite);
const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean => authorizationStatus === AuthorizationStatus.Unknown;
const checkFavoriteStatus = (id: FilmId, favoriteFilms: Films): boolean => favoriteFilms.some((film) => film.id === id);
const getIdRoute = (apiRoute: APIRoute, id: number): string => apiRoute.replace(AppRouteChangeElement.FilmId, String(id));

export {
  getGrade,
  getGenres,
  getCurrentGenreFilms,
  getFilmsWithoutId,
  getFavoriteFilms,
  isCheckedAuth,
  checkFavoriteStatus,
  getIdRoute
};
