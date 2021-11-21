import {connect, ConnectedProps} from 'react-redux';
import {useState} from 'react';
import AddReviewForm from '../../add-review-form/add-review-form';
import Logo from '../../logo/logo';
import SignOut from '../../sign-out/sign-out';
import LoadingScreen from '../loading-screen/loading-screen';
import {State} from '../../../types/state';
import {ThunkAppDispatch} from '../../../types/action';
import {CommentPost} from '../../../types/comment';
import {FilmId} from '../../../types/films';
import {postCommentAction} from '../../../store/api-actions';
import {getCurrentFilm} from '../../../store/film-data/selectors';

const mapStateToProps = (state: State) => ({
  currentFilm: getCurrentFilm(state),
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onSubmit(id: FilmId, review: CommentPost, onSubmit: (a: boolean) => void) {
    dispatch(postCommentAction(id, review, onSubmit));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function AddReviewScreen ({currentFilm, onSubmit}: PropsFromRedux): JSX.Element {
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

export {AddReviewScreen};
export default connector(AddReviewScreen);
