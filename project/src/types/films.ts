type PromoFilm = {
  id: FilmId,
  title: string,
  genre: string,
  releaseDate: number,
  previewImage: string,
  posterImage: string,
};

type Film = {
  id: FilmId,
  title: string,
  genre: string,
  release: number,
  posterImage: string,
  previewImage: string,
  backgroundImage: string,
  backgroundColor: string,
  videoLink: string,
  previewVideoLink: string,
  description: string,
  rating: number,
  scoresCount: number,
  director: string,
  starring: string[],
  runTime: number,
  isFavorite: boolean,
};

type FilmServer = {
  'id': FilmId,
  'name': string,
  'poster_image': string,
  'preview_image': string,
  'background_image': string,
  'background_color': string,
  'video_link': string,
  'preview_video_link': string,
  'description': string,
  'rating': number,
  'scores_count': number,
  'director': string,
  'starring': string[],
  'run_time': number,
  'genre': string,
  'released': number,
  'is_favorite': boolean,
}

type FilmsServer = FilmServer[]

type PlayerFilm = {
  videoLink: string,
  playerPoster: string,
}

type FilmId = number;
type Films = Film[];

export type {PromoFilm, Film, FilmServer, FilmsServer, PlayerFilm, FilmId, Films};
