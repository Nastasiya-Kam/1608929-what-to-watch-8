import dayjs from 'dayjs';

type Props = {
  userName: string,
  rating: number,
  text: string,
  date: string,
}

function Comment({userName, rating, text, date}: Props): JSX.Element {
  const dataComment = dayjs().format('MMMM D, YYYY');

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{text}</p>

        <footer className="review__details">
          <cite className="review__author">{userName}</cite>
          <time className="review__date" dateTime={date}>{dataComment}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}

export default Comment;
