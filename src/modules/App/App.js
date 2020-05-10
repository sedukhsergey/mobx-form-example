import React from 'react';
import { Provider } from "mobx-react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Header } from '../../modules'
import { Home, Form } from '../../pages';
import { initStore } from '../../store';


const App = () => {
  return (
    <Router>
      <Provider mobxStore={initStore()}>
        <Header />
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/form">
                <Form />
            </Route>
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
