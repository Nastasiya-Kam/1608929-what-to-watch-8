import ReactDOM from 'react-dom';
import App from './components/app/app';
import {mockFilm, setting, films} from './mock';

ReactDOM.render(
  <App
    title = {setting.TITLE}
    genre = {setting.GENRE}
    releaseDate = {setting.RELEASE_DATE}
    films = {films}
    mockFilm = {mockFilm}
  />,
  document.getElementById('root'));
