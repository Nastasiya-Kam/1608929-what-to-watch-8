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
  videoLink: string,
  description: string,
  rating: number,
  scoresCount: number,
  director: string,
  starring: string[],
  runTime: number,
  isFavorite: boolean,
};

type PlayerFilm = {
  videoLink: string,
  playerPoster: string,
}

type FilmId = number;

export type {PromoFilm, Film, PlayerFilm, FilmId};
