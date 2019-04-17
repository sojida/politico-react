import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import './assets/stylesheets/index.css';

const title = 'Politico React App';

ReactDOM.render(
  <div>
    <Header />
  </div>,
  document.getElementById('app')
);

module.hot.accept();
