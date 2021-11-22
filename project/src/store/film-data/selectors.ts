import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {Film, Films} from '../../types/films';
import {getFilmsWithoutId} from '../../utils/utils';
import {Comments} from '../../types/comment';

const getCurrentFilm = (state: State): Film | null => (state[NameSpace.film].currentFilm);
const getCurrentFilmById = (state: State, id: number): Film | undefined => (state[NameSpace.films].films.find((item) => item.id === id));
const getLoadingStatus = (state: State): boolean => (state[NameSpace.film].isLoading);
const getComments = (state: State): Comments => (state[NameSpace.film].comments);
const getFavoriteFilms = (state: State): Films => (state[NameSpace.film].favoriteFilms);
const getFavoriteLoadedStatus = (state: State): boolean => (state[NameSpace.film].isFavoriteLoaded);
const getCurrentSimilarFilms = (state: State): Films => (state[NameSpace.film].currentFilm) ? getFilmsWithoutId(state[NameSpace.film].similarFilms, state[NameSpace.film].currentFilm) : [];

export {getCurrentFilm, getCurrentFilmById, getLoadingStatus, getComments, getFavoriteFilms, getFavoriteLoadedStatus, getCurrentSimilarFilms};
