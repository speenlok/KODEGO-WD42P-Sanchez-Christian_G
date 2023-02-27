import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';

const header = ReactDOM.createRoot(document.getElementById('header'));
header.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);

const content = ReactDOM.createRoot(document.getElementById('content'));
content.render(
  <React.StrictMode>
    <Content />
  </React.StrictMode>
);

const footer = ReactDOM.createRoot(document.getElementById('footer'));
footer.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
