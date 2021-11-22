import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {Film, Films} from '../../types/films';
import {getFilmsWithoutId} from '../../utils/utils';
import {Comments} from '../../types/comment';

const getCurrentFilm = (state: State): Film | null => (state[NameSpace.Film].currentFilm);
const getCurrentFilmById = (id: number) => (state: State): Film | undefined => (state[NameSpace.Films].films.find((item) => item.id === id));
const getLoadingStatus = (state: State): boolean => (state[NameSpace.Film].isLoading);
const getComments = (state: State): Comments => (state[NameSpace.Film].comments);
const getFavoriteFilms = (state: State): Films => (state[NameSpace.Film].favoriteFilms);
const getFavoriteLoadedStatus = (state: State): boolean => (state[NameSpace.Film].isFavoriteLoaded);
const getCurrentSimilarFilms = (state: State): Films => (state[NameSpace.Film].currentFilm) ? getFilmsWithoutId(state[NameSpace.Film].similarFilms, state[NameSpace.Film].currentFilm) : [];

export {getCurrentFilm, getCurrentFilmById, getLoadingStatus, getComments, getFavoriteFilms, getFavoriteLoadedStatus, getCurrentSimilarFilms};
