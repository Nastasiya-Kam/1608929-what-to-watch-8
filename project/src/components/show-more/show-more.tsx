import {GENRE_FILMS_COUNT} from '../../const';

type Props = {
  renderedFilmCount: number,
  onClick: (a: number) => void;
}

function ShowMore({renderedFilmCount, onClick}: Props): JSX.Element {
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => onClick(renderedFilmCount + GENRE_FILMS_COUNT)}
      >
        Show more
      </button>
    </div>
  );
}

export default ShowMore;
