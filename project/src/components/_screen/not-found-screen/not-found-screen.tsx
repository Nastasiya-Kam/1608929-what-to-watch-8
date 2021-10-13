import {Link} from 'react-router-dom';
import Footer from '../../footer/footer';
import Logo from '../../logo/logo';

function NotFoundScreen(): JSX.Element {
  return(
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
      </header>

      <div className="user-page__content">
        <h1 className="page-title user-page__title">
          404.
          <br/>
          <small>Page not found</small>
          <br/>
          <br/>
          <Link to="/" className="user-block__link">Go to main page</Link>
        </h1>
      </div>

      <Footer />
    </div>
  );
}

export default NotFoundScreen;
