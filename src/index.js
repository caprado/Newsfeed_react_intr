/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
import './styles/styles.scss'; // Yep, that's right. import SASS/CSS files!
require('./favicon.ico'); // webpack to load favicon.ico

render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('app')
);

