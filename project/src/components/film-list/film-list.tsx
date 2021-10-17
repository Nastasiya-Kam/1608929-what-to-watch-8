import {CardFilm, FilmId} from '../../types/films';
import SmallFilmCard from '../small-film-card/small-film-card';
import {useState} from 'react';

type Props = {
  films: CardFilm[],
}

function FilmList({films}: Props): JSX.Element {
  const [activeFilmId, setActiveFilmId] = useState<FilmId | null>(0);

  return (
    <>
      <p>Current Film Id - {activeFilmId}</p>
      <div className="catalog__films-list">
        {films.map((film) => {
          const id = `id-${film.id}`;

          return (
            <SmallFilmCard
              key = {id}
              id = {film.id}
              image = {film.posterImage}
              name = {film.name}
              setActiveCardId = {setActiveFilmId}
            />);
        })}
      </div>
    </>
  );
}

export default FilmList;
