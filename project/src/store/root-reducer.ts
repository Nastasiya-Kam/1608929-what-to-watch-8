import {combineReducers} from 'redux';
import {filmsData} from './films-data/films-data';
import {filmData} from './film-data/film-data';
import {userProcess} from './user-process/user-process';

enum NameSpace {
  films = 'FILMS',
  film = 'FILM',
  user = 'USER',
}

const rootReducer = combineReducers({
  [NameSpace.films]: filmsData,
  [NameSpace.film]: filmData,
  [NameSpace.user]: userProcess,
});

type RootState = ReturnType<typeof rootReducer>;

export type {RootState};
export {NameSpace, rootReducer};
