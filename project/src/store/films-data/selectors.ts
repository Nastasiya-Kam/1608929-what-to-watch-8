import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {Film, Films} from '../../types/films';
import {getCurrentGenreFilms, getGenres} from '../../utils/utils';

const getGenresFilms = (state: State): string[] => getGenres(state[NameSpace.films].films);
const getFilmsByGenre = (state: State): Films => getCurrentGenreFilms(state[NameSpace.films].films, state[NameSpace.films].currentGenre);
const getCurrentGenre = (state: State): string => state[NameSpace.films].currentGenre;
const getPromoFilm = (state: State): Film | null => state[NameSpace.films].promoFilm;
const getFilms = (state: State): Films => state[NameSpace.films].films;
const getLoadedDataStatus = (state: State): boolean => state[NameSpace.films].isDataLoaded;

export {getFilms, getPromoFilm, getCurrentGenre, getLoadedDataStatus, getFilmsByGenre, getGenresFilms};
