import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ReactToDoApp } from './ReactToDoApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReactToDoApp></ReactToDoApp>
  </React.StrictMode>
);
