import {AppRoute, AppRouteChangeElement} from '../../const';
import browserHistory from '../../browser-history';
import {FilmId} from '../../types/films';

type Props = {
  id: FilmId,
}

function PlayButton({id}: Props): JSX.Element {
  return (
    <button
      className="btn btn--play film-card__button"
      type="button"
      onClick={() => browserHistory.push(AppRoute.Player.replace(AppRouteChangeElement.ID, String(id)))}
    >
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </button>
  );
}

export default PlayButton;
