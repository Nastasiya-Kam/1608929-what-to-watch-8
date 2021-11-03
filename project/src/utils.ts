import {Grade} from './const';

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

export {getGrade};
