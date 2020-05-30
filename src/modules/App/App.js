import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from '../../modules';
import { Dashboard, Form } from '../../pages';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route>
          <Form exact path="/form" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
