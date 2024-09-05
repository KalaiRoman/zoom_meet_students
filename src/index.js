import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/Store/store';
import { BrowserRouter } from 'react-router-dom';

// bootstrap

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Toaster } from 'react-hot-toast';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={store}>
  <Toaster
        position="top-center"
        reverseOrder={false}
      
      />
    <App />
  </Provider>
  </BrowserRouter>
);
reportWebVitals();
