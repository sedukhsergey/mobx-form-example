import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header } from 'modules';
import { PublicLayout } from 'layouts';
import { Dashboard, Navigator, Login, Page404, Registration } from 'pages';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/login">
          <PublicLayout>
            <Login />
          </PublicLayout>
        </Route>
        <Route exact path="/registration">
          <PublicLayout>
            <Registration />
          </PublicLayout>
        </Route>
        <Route exact path="/page404">
          <PublicLayout>
            <Page404 />
          </PublicLayout>
        </Route>

        <Route>
          <Navigator exact path="/" />
        </Route>
      </Switch>
    </>
  );
};

export default App;
