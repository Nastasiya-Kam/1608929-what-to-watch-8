import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  TITLE: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  RELEASE_DATE: new Date(2014),
};

const Films = [
  {
    id: 1,
    posterImage: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    name: 'Fantastic Beasts: The Crimes of Grindelwald',
  },
  {
    id: 2,
    posterImage: 'img/bohemian-rhapsody.jpg',
    name: 'Bohemian Rhapsody',
  },
  {
    id: 3,
    posterImage: 'img/macbeth.jpg',
    name: 'Macbeth',
  },
];

ReactDOM.render(
  <App
    title = {Setting.TITLE}
    genre = {Setting.GENRE}
    releaseDate = {Setting.RELEASE_DATE}
    films = {Films}
  />,
  document.getElementById('root'));
