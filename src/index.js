import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Card from './Card';
// import CardList from './CardList';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
// import {robots} from './robot';    //We are using destructuring here: ({....}) --allows us to grab the props object and its properties.

//CardList is accepting a robots prop


ReactDOM.render(
  <React.StrictMode>
    <App/>                            
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
