import {CommentLength} from '../const';

const EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

enum ErrorMessage {
  EmailEmpty = 'Email can\'t be empty',
  PasswordEmpty = 'Password can\'t be empty',
  EmailValid = 'Please enter a valid email address',
  PasswordValid = 'Password can\'t include only spaces',
  Correct = '',
}

enum User {
  Password = 'user-password',
  Email = 'user-email',
}

const checkValidText = (text: string): boolean => (text.length >= CommentLength.Min && text.length <= CommentLength.Max);
const checkValidRating = (rating: number): boolean => (rating !==0);
const checkValidForm = (isValidText: boolean, isValidRating: boolean): boolean => isValidText === true && isValidRating === true;

export {EMAIL_PATTERN, ErrorMessage, User, checkValidText, checkValidRating, checkValidForm};
