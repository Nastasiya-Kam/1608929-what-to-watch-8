type CardFilm = {
  id: number,
  posterImage: string,
  name: string,
}

type PromoFilm = {
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
  description: string,
  rating: number,
  scoresCount: number,
  director: string,
  starrings: string[],
};

export type {CardFilm, PromoFilm, Film};
