import {Film, FilmId} from '../../types/films';
import SmallFilmCard from '../small-film-card/small-film-card';
import {useState} from 'react';

type Props = {
  films: Film[],
}

function FilmList({films}: Props): JSX.Element {
  const [activeFilmId, setActiveFilmId] = useState<FilmId | null>();

  return (
    <div className="catalog__films-list">
      {films.map((film) => {
        const id = `id-${film.id}`;

        return (
          <SmallFilmCard
            key={id}
            film={film}
            onMouseEvent={setActiveFilmId}
            isActive={activeFilmId === film.id}
          />);
      })}
    </div>
  );
}

export default FilmList;
