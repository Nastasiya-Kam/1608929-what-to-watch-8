import {Film, FilmServer} from '../types/films';
import {Comment, CommentServer} from '../types/comment';

const adaptToClient = (film: FilmServer): Film => ({
  id: film['id'],
  genre: film['genre'],
  description: film['description'],
  rating: film['rating'],
  director: film['director'],
  starring: film['starring'],
  title: film['name'],
  release: film['released'],
  posterImage: film['poster_image'],
  previewImage: film['preview_image'],
  backgroundImage: film['background_image'],
  backgroundColor: film['background_color'],
  videoLink: film['video_link'],
  previewVideoLink: film['preview_video_link'],
  scoresCount: film['scores_count'],
  runTime: film['run_time'],
  isFavorite: film['is_favorite'],
});

const adaptCommentsToClient = (comment: CommentServer): Comment => ({
  id: comment['id'],
  userId: comment['user']['id'],
  userName: comment['user']['name'],
  rating: comment['rating'],
  text: comment['comment'],
  date: comment['date'],
});

export {adaptToClient, adaptCommentsToClient};
