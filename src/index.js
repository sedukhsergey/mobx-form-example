import React from 'react';
import ReactDOM from 'react-dom';
import { initStore } from './store';
import { StoreProvider } from './store/StoreProvider';
import './index.css';
import App from './modules/App/App';
import * as serviceWorker from './serviceWorker';
console.log('');
const initializeStore = initStore();

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={initializeStore}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
