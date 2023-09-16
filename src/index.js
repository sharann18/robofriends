import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App'
import reportWebVitals from './reportWebVitals';
import 'tachyons';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
// greeting is now a property of Hello class in Hello.js

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();