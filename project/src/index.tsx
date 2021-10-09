import ReactDOM from 'react-dom';
import App from './components/app/app';
import {mockFilm, mainFilm, films} from './mock';

ReactDOM.render(
  <App
    title = {mainFilm.TITLE}
    genre = {mainFilm.GENRE}
    releaseDate = {mainFilm.RELEASE_DATE}
    previewImage = {mainFilm.PREVIEW_IMAGE}
    posterImgage = {mainFilm.POSTER_IMAGE}
    films = {films}
    mockFilm = {mockFilm}
  />,
  document.getElementById('root'));
