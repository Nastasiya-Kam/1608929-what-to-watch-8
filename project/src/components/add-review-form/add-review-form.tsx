import {useState, FormEvent, ChangeEvent, Fragment} from 'react';
import {FilmId} from '../../types/films';
import {checkValidText, checkValidRating, checkValidForm} from '../../utils';
import {CommentPost} from '../../types/comment';
import {STARS} from '../../const';

type Props = {
  filmId: FilmId,
  onReviewSubmit: (filmId: number, userReview: CommentPost, onFormSubmit: (a: boolean) => void) => void,
  setIsLoading: (a: boolean) => void,
  isLoading: boolean,
}

function AddReviewForm({filmId, onReviewSubmit, setIsLoading, isLoading}: Props): JSX.Element {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [isValidText, setValidText] = useState(false);
  const [isValidRating, setValidRating] = useState(false);

  return (
    <form
      action="#"
      className="add-review__form"
      onSubmit={(evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const review = {
          rating: rating,
          text: comment,
        };

        onReviewSubmit(filmId, review, setIsLoading);
      }}
    >
      <div className="rating">
        <div className="rating__stars">
          {STARS.map((star) => (
            <Fragment key={star}>
              <input
                disabled={isLoading}
                className="rating__input"
                id={`star-${star}`}
                type="radio"
                name="rating"
                value={star}
                checked={star === rating}
                onChange={({target}: ChangeEvent<HTMLInputElement>) => {
                  const value = parseInt(target.value, 10);

                  setValidRating(checkValidRating(value));
                  setRating(value);
                }}
              />
              <label className="rating__label" htmlFor={`star-${star}`}>Rating {star}</label>
            </Fragment>
          ))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea disabled={isLoading} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
          onChange={({target}: ChangeEvent<HTMLTextAreaElement>) => {
            const value = target.value;

            setValidText(checkValidText(value));
            setComment(value);
          }}
        >
        </textarea>
        <div className="add-review__submit">
          <button
            className="add-review__btn"
            type="submit"
            disabled={!checkValidForm(isValidText, isValidRating) ?? {isLoading}}
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddReviewForm;
