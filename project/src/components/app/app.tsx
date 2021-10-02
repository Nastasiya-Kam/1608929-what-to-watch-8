import MainScreen from '../main-screen/main-screen';

type AppFilmProps = {
  id: number,
  posterImage: string,
  name: string,
}

type AppScreenProps = {
  title: string,
  genre: string,
  releaseDate: Date,
  films: AppFilmProps[],
};

function App({title, genre, releaseDate, films}: AppScreenProps): JSX.Element {
  return (
    <MainScreen
      title = {title}
      genre = {genre}
      releaseDate = {releaseDate}
      films = {films}
    />
  );
}

export default App;
