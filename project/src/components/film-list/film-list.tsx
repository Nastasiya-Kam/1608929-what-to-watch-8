import {CardFilm} from '../../types/films';
import SmallFilmCard from '../small-film-card/small-film-card';
import {useState} from 'react';

type Props = {
  films: CardFilm[],
}

function FilmList({films}: Props): JSX.Element {
  const [currentFilm, setCurrentFilm] = useState(0);
  //eslint-disable-next-line
  console.log(currentFilm);

  const setActiveCardId = (id: number) : void => setCurrentFilm(id);

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <SmallFilmCard
          key = {film.id}
          id = {film.id}
          image = {film.posterImage}
          name = {film.name}
          setActiveCardId = {setActiveCardId}
        />))}
    </div>
  );
}

export default FilmList;
