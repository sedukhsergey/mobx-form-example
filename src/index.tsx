import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
} from 'react-router-dom';
import { StoreProvider } from 'store/StoreProvider';
import { getStoreSnapshot } from 'store/getStoreSnapshot';
import App from 'modules/App/App';
import { RedirectRouter } from './routes';
import * as serviceWorker from './serviceWorker';
import './styles/tailwind.css';

const store = getStoreSnapshot();
ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <Router history={RedirectRouter.history}>
        <Route
          path="/:locale(en|ru)?"
          component={App} />
      </Router>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
