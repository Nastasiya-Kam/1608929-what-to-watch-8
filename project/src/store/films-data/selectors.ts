import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {Film, Films} from '../../types/films';
import {getCurrentGenreFilms, getGenres} from '../../utils/utils';

const getGenresFilms = (state: State): string[] => getGenres(state[NameSpace.Films].films);
const getFilmsByGenre = (state: State): Films => getCurrentGenreFilms(state[NameSpace.Films].films, state[NameSpace.Films].currentGenre);
const getCurrentGenre = (state: State): string => state[NameSpace.Films].currentGenre;
const getPromoFilm = (state: State): Film | null => state[NameSpace.Films].promoFilm;
const getFilms = (state: State): Films => state[NameSpace.Films].films;
const getLoadedDataStatus = (state: State): boolean => state[NameSpace.Films].isDataLoaded;

export {getFilms, getPromoFilm, getCurrentGenre, getLoadedDataStatus, getFilmsByGenre, getGenresFilms};
