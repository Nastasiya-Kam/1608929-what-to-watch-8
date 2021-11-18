import {connect, ConnectedProps} from 'react-redux';
import {AppRoute} from '../../const';
import browserHistory from '../../browser-history';
import {logoutAction} from '../../store/api-actions';
import {ThunkAppDispatch} from '../../types/action';

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onLogout() {
    dispatch(logoutAction());
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function SignOut({onLogout}: PropsFromRedux): JSX.Element {
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

            onLogout();
          }}
        >
          Sign out
        </a>
      </li>
    </ul>
  );
}

export {SignOut};
export default connector(SignOut);

