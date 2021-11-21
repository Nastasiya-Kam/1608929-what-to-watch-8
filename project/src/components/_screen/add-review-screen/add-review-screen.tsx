import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';
import AddReviewForm from '../../add-review-form/add-review-form';
import Logo from '../../logo/logo';
import SignOut from '../../sign-out/sign-out';
import LoadingScreen from '../loading-screen/loading-screen';
import {CommentPost} from '../../../types/comment';
import {FilmId} from '../../../types/films';
import {postCommentAction} from '../../../store/api-actions';
import {getCurrentFilm} from '../../../store/film-data/selectors';

function AddReviewScreen(): JSX.Element {
  const currentFilm = useSelector(getCurrentFilm);
  const dispatch = useDispatch();
  const onSubmit = (id: FilmId, review: CommentPost, onFormSubmit: (a: boolean) => void) => {
    dispatch(postCommentAction(id, review, onFormSubmit));
  };

  const [isLoading, setIsLoading] = useState<boolean>(false);

  if (currentFilm === null) {
    return (
      <LoadingScreen />
    );
  }

  const {id, previewImage, posterImage, title, backgroundColor} = currentFilm;

  return (
    <section
      className="film-card film-card--full"
      style={{backgroundColor: backgroundColor}}
    >
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={previewImage} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">{title}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <SignOut />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={`${title} poster`} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm
          filmId={id}
          onReviewSubmit={(currentId, review, onFormSubmit) => onSubmit(currentId, review, onFormSubmit)}
          setIsLoading={setIsLoading}
          isLoading={isLoading}
        />
      </div>

    </section>
  );
}

export default AddReviewScreen;
