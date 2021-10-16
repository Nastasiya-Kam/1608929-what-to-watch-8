type CardFilm = {
  id: number,
  posterImage: string,
  name: string,
}

type PromoFilm = {
  id: number,
  title: string,
  genre: string,
  releaseDate: number,
  previewImage: string,
  posterImage: string,
};

type Film = {
  id: number,
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
};

type PlayerFilm = {
  videoLink: string,
  playerPoster: string,
}

export type {CardFilm, PromoFilm, Film, PlayerFilm};
