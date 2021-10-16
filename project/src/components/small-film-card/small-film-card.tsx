import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';

type Film = {
  id: number,
  image: string,
  name: string,
  setActiveCardId: (a: number) => void;
}

function SmallFilmCard({id, image, name, setActiveCardId}: Film): JSX.Element {

  return (
    <article className="small-film-card catalog__films-card"
      onMouseOver = {() => setActiveCardId(id)}
    >
      <div className="small-film-card__image">
        <img src={image} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.Film}${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
