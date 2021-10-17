import {useState, FormEvent, ChangeEvent, Fragment} from 'react';
import {FilmId} from '../types/films';

type UserReview = {
  text: string,
  rating: number,
}

type Props = {
  filmId: FilmId,
  onReviewSubmit: (filmId: number, userReview: UserReview) => void
}

const STARS = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function AddReviewForm ({filmId, onReviewSubmit}: Props): JSX.Element {
  const [userComment, setUserComment] = useState('');
  const [userRating, setUserRating] = useState(0);

  return (
    <form action="#"
      className="add-review__form"
      onSubmit={(evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const review = {
          text: userComment,
          rating: userRating,
        };

        //todo текст от 50 до 400 символов
        //todo кнопка не активна, пока не поставил оценку и не ввёл текст
        //todo блокировка формы при отправке данных
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
                  const value = target.value;

                  setUserRating(parseInt(value, 10));
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

            setUserComment(value);
          }}
        >
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
        <p>Введённый комментарий: {userComment}</p>
        <p>Введённый рейтинг: {userRating}</p>
      </div>
    </form>
  );
}

export default AddReviewForm;
