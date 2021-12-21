import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/configureStore';

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App store={store} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
