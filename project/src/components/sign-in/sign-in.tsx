import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

function SignIn(): JSX.Element {
  return (
    <ul className="user-block">
      <Link to={AppRoute.Login} className="user-block__link">Sign in</Link>
    </ul>
  );
}

export default SignIn;
