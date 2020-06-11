import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from '../../modules';
import { Dashboard, Navigator, Login, Page404, Registration } from '../../pages';
import RedirectRouter from '../../utils/RedirectRouter';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/registration">
          <Registration />
        </Route>
        <Route exact path="/page404">
          <Page404 />
        </Route>

        <Route>
          <Navigator exact path="/" />
        </Route>
      </Switch>
    </>
  );
};

export default App;
