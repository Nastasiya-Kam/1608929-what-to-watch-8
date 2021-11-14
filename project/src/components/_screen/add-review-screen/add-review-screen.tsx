import {connect, ConnectedProps} from 'react-redux';
import AddReviewForm from '../../add-review-form/add-review-form';
import Logo from '../../logo/logo';
import SignOut from '../../sign-out/sign-out';
import {State} from '../../../types/state';
import LoadingScreen from '../loading-screen/loading-screen';
import {ThunkAppDispatch} from '../../../types/action';
import {CommentPost} from '../../../types/comment';
import {postCommentsAction} from '../../../store/api-actions';

const mapStateToProps = ({currentFilm}: State) => ({
  currentFilm,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onSubmit(id: number, review: CommentPost) {
    dispatch(postCommentsAction(id, review));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function AddReviewScreen ({currentFilm, onSubmit}: PropsFromRedux): JSX.Element {
  if (currentFilm === null) {
    return (
      <LoadingScreen />
    );
  }

  const {id, previewImage, posterImage, title} = currentFilm;

  return (
    <section className="film-card film-card--full">
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
          filmId = {id}
          onReviewSubmit = {(currentId, review) => onSubmit(currentId, review)}
        />
      </div>

    </section>
  );
}

export {AddReviewScreen};
export default connector(AddReviewScreen);
