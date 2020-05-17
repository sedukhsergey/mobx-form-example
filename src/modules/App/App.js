import React from 'react';
import { Provider } from "mobx-react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Header } from '../../modules'
import { Home, Form, Dashboard } from '../../pages';
// import { initStore } from '../../store';
import { StoreProvider } from '../../store/StoreProvider';

const App = () => {
  return (
    <Router>
      <StoreProvider>
        <Header />
        <Switch>
            {/*<Route exact path="/">*/}
                {/*<Home />*/}
            {/*</Route>*/}
            {/*<Route exact path="/form">*/}
                {/*<Form />*/}
            {/*</Route>*/}
            <Route exact path="/dashboard">
                <Dashboard />
            </Route>
        </Switch>
      </StoreProvider>
    </Router>
  );
}

export default App;
