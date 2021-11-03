import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import {FilmId} from '../../types/films';
import VideoPlayer from '../video-player/video-player';

type Film = {
  id: FilmId,
  image: string,
  videoLink: string,
  name: string,
  setActiveCardId: (a: FilmId | null) => void;
  isActive: boolean,
}

function SmallFilmCard({id, image, videoLink, name, setActiveCardId, isActive}: Film): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter = {() => {
        setActiveCardId(id);
      }}
      onMouseLeave = {() => {
        setActiveCardId(null);
      }}
    >
      <div className="small-film-card__image">
        {
          (isActive)
            ? <VideoPlayer videoLink={videoLink} poster={image} />
            : <img src={image} alt={name} width="280" height="175" />
        }
      </div>
      <h3 className="small-film-card__title">
        <p>{id}{isActive ? 'yes' : 'no'}</p>
        <Link className="small-film-card__link" to={AppRoute.Film.replace(':id', String(id))}>{name}</Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
