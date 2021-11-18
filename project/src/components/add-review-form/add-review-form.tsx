import {useState, FormEvent, ChangeEvent, Fragment} from 'react';
import {FilmId} from '../../types/films';
import {checkValidText, checkValidRating, checkValidForm} from '../../utils';
import {CommentPost} from '../../types/comment';
import {STARS} from '../../const';

type Props = {
  filmId: FilmId,
  onReviewSubmit: (filmId: number, userReview: CommentPost) => void,
}

function AddReviewForm({filmId, onReviewSubmit}: Props): JSX.Element {
  const [userComment, setUserComment] = useState('');
  const [userRating, setUserRating] = useState(0);
  const [validText, setValidText] = useState(false);
  const [validRating, setValidRating] = useState(false);

  return (
    <form action="#"
      className="add-review__form"
      onSubmit={(evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const review = {
          rating: userRating,
          text: userComment,
        };

        //TODO блокировка формы при отправке данных
        //todo разблокировка в случае успеха или при возникновении ошибки
        //todo при успехе переход на карточку фильма
        onReviewSubmit(filmId, review);
      }}
    >
      <div className="rating">
        <div className="rating__stars">
          {STARS.map((star) => (
            <Fragment key = {star}>
              <input
                className="rating__input"
                id={`star-${star}`}
                type="radio"
                name="rating"
                value={star}
                checked={star === userRating}
                onChange={({target}: ChangeEvent<HTMLInputElement>) => {
                  const value = parseInt(target.value, 10);

                  setValidRating(checkValidRating(value));
                  setUserRating(value);
                }}
              />
              <label className="rating__label" htmlFor={`star-${star}`}>Rating {star}</label>
            </Fragment>
          ))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
          onChange={({target}: ChangeEvent<HTMLTextAreaElement>) => {
            const value = target.value;

            setValidText(checkValidText(value));
            setUserComment(value);
          }}
        >
        </textarea>
        <div className="add-review__submit">
          <button
            className="add-review__btn"
            type="submit"
            disabled={!checkValidForm(validText, validRating)}
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddReviewForm;
