import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  TITLE: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  RELEASE_DATE: 2014,
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
  {
    id: 4,
    posterImage: 'img/aviator.jpg',
    name: 'Aviator',
  },
  {
    id: 5,
    posterImage: 'img/we-need-to-talk-about-kevin.jpg',
    name: 'We need to talk about Kevin',
  },
  {
    id: 6,
    posterImage: 'img/what-we-do-in-the-shadows.jpg',
    name: 'What We Do in the Shadows',
  },
  {
    id: 7,
    posterImage: 'img/revenant.jpg',
    name: 'Revenant',
  },
  {
    id: 8,
    posterImage: 'img/johnny-english.jpg',
    name: 'Johnny English',
  },
  {
    id: 9,
    posterImage: 'img/shutter-island.jpg',
    name: 'Shutter Island',
  },
  {
    id: 10,
    posterImage: 'img/pulp-fiction.jpg',
    name: 'Pulp Fiction',
  },
  {
    id: 11,
    posterImage: 'img/no-country-for-old-men.jpg',
    name: 'No Country for Old Men',
  },
  {
    id: 12,
    posterImage: 'img/snatch.jpg',
    name: 'Snatch',
  },
  {
    id: 13,
    posterImage: 'img/moonrise-kingdom.jpg',
    name: 'Moonrise Kingdom',
  },
  {
    id: 14,
    posterImage: 'img/seven-years-in-tibet.jpg',
    name: 'Seven Years in Tibet',
  },
  {
    id: 15,
    posterImage: 'img/midnight-special.jpg',
    name: 'Midnight Special',
  },
  {
    id: 16,
    posterImage: 'img/war-of-the-worlds.jpg',
    name: 'War of the Worlds',
  },
  {
    id: 17,
    posterImage: 'img/dardjeeling-limited.jpg',
    name: 'Dardjeeling Limited',
  },
  {
    id: 18,
    posterImage: 'img/orlando.jpg',
    name: 'Orlando',
  },
  {
    id: 19,
    posterImage: 'img/mindhunter.jpg',
    name: 'Mindhunter',
  },
  {
    id: 20,
    posterImage: 'img/midnight-special.jpg',
    name: 'Midnight Special',
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
