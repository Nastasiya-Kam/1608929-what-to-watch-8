import {CardFilm} from '../../types/films';
import SmallFilmCard from '../small-film-card/small-film-card';

type Props = {
  films: CardFilm[],
}

function FilmList({films}: Props): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((film) => <SmallFilmCard key={film.id} posterImage = {film.posterImage} name = {film.name}/>)}
    </div>
  );
}

export default FilmList;
