import {connect, ConnectedProps} from 'react-redux';
import Footer from '../../footer/footer';
import Logo from '../../logo/logo';
import {loginAction} from '../../../store/api-actions';
import {useRef, FormEvent} from 'react';
import {ThunkAppDispatch} from '../../../types/action';
import {AuthData} from '../../../types/auth-data';
import SignInMessage from '../../sign-in-message/sign-in-message';
// import SignInError from '../../sign-in-error/sign-in-error';
import {useHistory} from 'react-router';
import {AppRoute} from '../../../const';

const checkPassword = (password: string): boolean => {
  const patternPassword = /^[\s]+$/;

  if (password !== null) {
    return patternPassword.test(password);
  }

  return false;
};

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onSubmit(authData: AuthData) {
    dispatch(loginAction(authData));
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function SignInScreen(props: PropsFromRedux): JSX.Element {
  const {onSubmit} = props;

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const history = useHistory();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      const pattern = /^[\s]+$/;

      if (!pattern.test(passwordRef.current.value)) {
        onSubmit({
          login: loginRef.current.value,
          password: passwordRef.current.value,
        });

        history.push(AppRoute.Root);
      }
    }
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form
          action=""
          className="sign-in__form"
          onSubmit={handleSubmit}
        >
          {(passwordRef.current !== null && checkPassword(passwordRef.current.value)) && <SignInMessage />}
          {/* {<SignInError />} */}
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                ref={loginRef}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">
                Email address
              </label>
            </div>
            <div className="sign-in__field">
              <input
                ref={passwordRef}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button
              className="sign-in__btn"
              type="submit"
              // onClick={() => history.push(AppRoute.Root)}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export {SignInScreen};
export default connector(SignInScreen);
