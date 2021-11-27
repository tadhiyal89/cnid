import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './router';

ReactDOM.render(
  <React.StrictMode>
    <div className="container-section">
      <Router />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
