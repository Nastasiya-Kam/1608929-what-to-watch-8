import {image, music, datatype, name, date} from 'faker';
import {CommentServer} from '../types/comment';
import {FilmServer} from '../types/films';

enum Count {
  FilmsTest = 10,
  CommentsTest = 10,
}

enum HttpCode {
  Ok = 200,
  NoContent = 204,
  NoAuth = 401,
}

const makeFakeFilm = (): FilmServer => ({
  'id': 1,
  'name': name.title(),
  'genre': music.genre(),
  'released': 2021,
  'poster_image': image.image(),
  'preview_image': image.image(),
  'background_image': image.image(),
  'background_color': '#ffffff',
  'video_link': 'https://some-link',
  'preview_video_link': 'https://some-link',
  'description': 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
  'rating': 8.9,
  'scores_count': 240,
  'director': name.firstName(),
  'starring': [name.firstName(), name.firstName(), name.firstName()],
  'run_time': 998,
  'is_favorite': datatype.boolean(),
} as FilmServer);

const makeFakeFilms = (): FilmServer[] => new Array(Count.FilmsTest).fill(undefined).map(() => makeFakeFilm());

const makeFakeComment = (): CommentServer => ({
  'id': 1,
  'user': {
    'id': 4,
    'name': name.firstName(),
  },
  'rating': 8.9,
  'comment': name.title(),
  'date': date.recent().toString(),
} as CommentServer);

const makeFakeComments = (): CommentServer[] => new Array(Count.CommentsTest).fill(undefined).map(() => makeFakeComment());

const makeFakeGenre = (): string => music.genre();

export {HttpCode, makeFakeFilm, makeFakeFilms, makeFakeComment, makeFakeComments, makeFakeGenre};
