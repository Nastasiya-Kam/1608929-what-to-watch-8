import {combineReducers} from 'redux';
import {filmsData} from './films-data/films-data';
import {filmData} from './film-data/film-data';
import {userProcess} from './user-process/user-process';

enum NameSpace {
  Films = 'FILMS',
  Film = 'FILM',
  User = 'USER',
}

const rootReducer = combineReducers({
  [NameSpace.Films]: filmsData,
  [NameSpace.Film]: filmData,
  [NameSpace.User]: userProcess,
});

type RootState = ReturnType<typeof rootReducer>;

export type {RootState};
export {NameSpace, rootReducer};
