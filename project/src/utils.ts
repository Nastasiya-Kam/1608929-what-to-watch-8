import {GenreType, Grade} from './const';

const getGrade = (rating: number) => {
  if (rating < Grade.BAD.value) {
    return Grade.BAD.name;
  }

  if (rating < Grade.NORMAL.value && rating >= Grade.BAD.value) {
    return Grade.NORMAL.name;
  }

  if (rating < Grade.GOOD.value && rating >= Grade.NORMAL.value) {
    return Grade.GOOD.name;
  }

  if (rating < Grade.VERY_GOOD.value && rating >= Grade.GOOD.value) {
    return Grade.VERY_GOOD.name;
  }

  if (rating === Grade.AWESOME.value) {
    return Grade.AWESOME.name;
  }
};

const getGenre = (genre: string) => {
  const lowerCaseGenre = genre.toLowerCase();

  if (lowerCaseGenre === GenreType.Comedies.name) {
    return GenreType.Comedies.group;
  }

  if (lowerCaseGenre === GenreType.Horror.name) {
    return GenreType.Horror.group;
  }

  if (lowerCaseGenre === GenreType.Dramas.name) {
    return GenreType.Dramas.group;
  }

  if (lowerCaseGenre === GenreType.Crime.name) {
    return GenreType.Crime.group;
  }
};

export {getGrade, getGenre};
