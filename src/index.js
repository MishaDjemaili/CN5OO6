import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GreetingElement from './myGreetingApp';
import reportWebVitals from './reportWebVitals';
import AppColor from './AppbackgroundColor';

ReactDOM.render(
  <React.StrictMode>
    <AppColor heading="This is the first element" lbl="Name:" color="green" />
    <AppColor heading="This is the second element" lbl="Name:" color="blue" />
    <AppColor heading="This is the third element" lbl="Name:" color="yellow" />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

