import Footer from '../../footer/footer';
import Logo from '../../logo/logo';
import {loginAction} from '../../../store/api-actions';
import {useRef, FormEvent, useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router';
import {AppRoute} from '../../../const';
import {ErrorMessage, User, EMAIL_PATTERN} from '../../../utils/validation';

const checkPassword = (password: string): boolean => {
  const patternPassword = /^ *$/;
  return patternPassword.test(password);
};

const validateEmail = (email: string): boolean => {
  const patternMail = EMAIL_PATTERN;
  return patternMail.test(String(email).toLowerCase());
};

function SignInScreen(): JSX.Element {
  const dispatch = useDispatch();

  // Отображение сообщений об ошибках при валидировании формы взято из видеоролика Ulbi TV
  // https://www.youtube.com/watch?v=WADswtZB-qg

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailDirty, setEmailDirty] = useState<boolean>(false);
  const [passwordDirty, setPasswordDirty] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>(ErrorMessage.EmailEmpty);
  const [passwordError, setPasswordError] = useState<string>(ErrorMessage.PasswordEmpty);
  const [formValid, setFormValid] = useState<boolean>(false);

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const history = useHistory();

  const emailHandler = (evt: FormEvent<HTMLInputElement>) => {
    setEmail(evt.currentTarget.value);
    if (validateEmail(evt.currentTarget.value)) {
      setEmailError(ErrorMessage.Correct);
    } else {
      setEmailError(ErrorMessage.EmailValid);
    }
  };

  const passwordHandler = (evt: FormEvent<HTMLInputElement>) => {
    setPassword(evt.currentTarget.value);
    if (checkPassword(evt.currentTarget.value)) {
      setPasswordError(ErrorMessage.PasswordEmpty);
    } else {
      setPasswordError(ErrorMessage.Correct);
    }
  };

  const blurHandler = (evt: FormEvent<HTMLInputElement>) => {
    switch (evt.currentTarget.name) {
      case User.Email:
        setEmailDirty(true);
        break;
      case User.Password:
        setPasswordDirty(true);
        break;
    }
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      if (!checkPassword(passwordRef.current.value) && validateEmail(loginRef.current.value)) {
        dispatch(loginAction({
          login: loginRef.current.value,
          password: passwordRef.current.value,
        }));

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
          {(emailDirty || passwordDirty) && <div className="sign-in__message">{(emailDirty && emailError) && <p>{emailError}</p>}{(passwordDirty && passwordError) && <p>{passwordError}</p>}</div>}
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                ref={loginRef}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                onBlur={blurHandler}
                onChange={emailHandler}
                value={email}
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
                onBlur={blurHandler}
                onChange={passwordHandler}
                value={password}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button disabled={!formValid} className="sign-in__btn" type="submit" >
              Sign in
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default SignInScreen;
