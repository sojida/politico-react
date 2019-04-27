import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './assets/stylesheets/index.css';

async function getComponent() {
  const element = document.createElement('div');
  const { default: _ } = await import(
    /* webpackChunkName: "lodash" */ 'lodash'
  );

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

getComponent().then(component => {
  document.body.appendChild(component);
});

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);

module.hot.accept();
