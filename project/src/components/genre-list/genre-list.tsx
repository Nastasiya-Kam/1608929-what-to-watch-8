type Props = {
  genres: string[],
  currentGenre: string,
  setCurrentGenre: (a: string) => void,
}

function GenreList({genres, currentGenre, setCurrentGenre}: Props): JSX.Element {
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
                setCurrentGenre(element);
              }}
            >
              {element}
            </a>
          </li>);
      })}
    </ul>
  );
}

export {GenreList};
