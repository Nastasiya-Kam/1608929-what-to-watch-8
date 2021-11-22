import {MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH} from '../const';

const checkValidText = (text: string): boolean => (text.length >= MIN_COMMENT_LENGTH && text.length <= MAX_COMMENT_LENGTH);
const checkValidRating = (rating: number): boolean => (rating !==0);
const checkValidForm = (isValidText: boolean, isValidRating: boolean): boolean => isValidText === true && isValidRating === true;

export {checkValidText, checkValidRating, checkValidForm};
