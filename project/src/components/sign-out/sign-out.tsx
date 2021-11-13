import {Actions} from '../../types/action';
import {connect, ConnectedProps} from 'react-redux';
import {Dispatch} from 'redux';
import {requireLogout} from '../../store/action';
import {AuthorizationStatus} from '../../const';

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onLogout(auth: AuthorizationStatus) {
    dispatch(requireLogout(auth));
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function SignOut({onLogout}: PropsFromRedux): JSX.Element {
  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item">
        <a
          className="user-block__link"
          onClick={(evt) => {
            evt.preventDefault();

            onLogout(AuthorizationStatus.NoAuth);
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

