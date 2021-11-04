import {GENRE_FILMS_COUNT} from '../../const';

type Props = {
  genres: string[],
  currentGenre: string,
  onGenreChange: (a: string) => void,
  setRenderedFilmCount: (a: number) => void,
}

function GenreList({genres, currentGenre, onGenreChange, setRenderedFilmCount}: Props): JSX.Element {
  return (
    <ul className="catalog__genres-list">
      {genres.map((element, index) => {
        const keyGenre = `genre-${index}`;
        return (
          <li
            key={keyGenre}
            className={`catalog__genres-item${(element === currentGenre) ? ' catalog__genres-item--active' : ''}`}
          >
            <a
              href="#"
              className="catalog__genres-link"
              onClick={(evt) => {
                evt.preventDefault();
                onGenreChange(element);
                setRenderedFilmCount(GENRE_FILMS_COUNT);
              }}
            >
              {element}
            </a>
          </li>);
      })}
    </ul>
  );
}

export default GenreList;
