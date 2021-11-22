import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import browserHistory from '../../browser-history';
import VideoPlayer from '../video-player/video-player';
import {AppRoute, AppRouteChangeElement} from '../../const';
import {FilmId, Film} from '../../types/films';
import {loadFilm} from '../../store/action';

type Props = {
  film: Film,
  onMouseEvent: (a: FilmId | null) => void;
  isActive: boolean,
}

function SmallFilmCard({film, onMouseEvent, isActive}: Props): JSX.Element {
  const {id, title, previewImage, videoLink} = film;
  const dispatch = useDispatch();


  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter={() => {
        onMouseEvent(id);
      }}
      onMouseLeave={() => {
        onMouseEvent(null);
      }}
    >
      <div
        className="small-film-card__image"
        onClick={() => browserHistory.push(AppRoute.Film.replace(AppRouteChangeElement.Id, String(id)))}
      >
        {
          (isActive)
            ? <VideoPlayer videoLink={videoLink} poster={previewImage} />
            : <img src={previewImage} alt={title} width="280" height="175" />
        }
      </div>
      <h3 className="small-film-card__title">
        <Link
          className="small-film-card__link"
          to={AppRoute.Film.replace(AppRouteChangeElement.Id, String(id))}
          onClick={() => {
            dispatch(loadFilm(film));
          }}
        >
          {title}
        </Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
