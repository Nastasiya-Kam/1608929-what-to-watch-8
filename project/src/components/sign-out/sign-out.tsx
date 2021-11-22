import {useDispatch} from 'react-redux';
import {AppRoute} from '../../const';
import browserHistory from '../../browser-history';
import {logoutAction} from '../../store/api-actions';

function SignOut(): JSX.Element {
  const dispatch = useDispatch();

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div
          className="user-block__avatar"
          onClick={() => browserHistory.push(AppRoute.MyList)}
        >
          <img
            src="img/avatar.jpg"
            alt="User avatar"
            width="63"
            height="63"
          />
        </div>
      </li>
      <li className="user-block__item">
        <a
          className="user-block__link"
          onClick={(evt) => {
            evt.preventDefault();

            dispatch(logoutAction());
          }}
        >
          Sign out
        </a>
      </li>
    </ul>
  );
}

export default SignOut;

