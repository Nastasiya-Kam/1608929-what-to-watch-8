import {image, music, datatype, name, date} from 'faker';
import {Comment} from '../types/comment';
import {Film} from '../types/films';

const makeFakeFilm = (): Film => ({
  id: 1,
  title: name.title(),
  genre: music.genre(),
  release: 2021,
  posterImage: image.image(),
  previewImage: image.image(),
  backgroundImage: image.image(),
  backgroundColor: 'string',
  videoLink: 'string',
  previewVideoLink: 'string',
  description: 'string',
  rating: 100,
  scoresCount: 12354,
  director: name.firstName(),
  starring: ['string', 'string', 'string'],
  runTime: 998,
  isFavorite: datatype.boolean(),
} as Film);

const makeFakeComment = (): Comment => ({
  id: 1,
  userId: 5,
  userName: name.firstName(),
  rating: 135,
  text: name.title(),
  date: date.recent().toString(),
} as Comment);

const makeFakeGenre = (): string => music.genre();

export {makeFakeFilm, makeFakeComment, makeFakeGenre};
