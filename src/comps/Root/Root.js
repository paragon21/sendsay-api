import React from 'react';
import './Root.css';
import LoginPage from '../../pages/LoginPage'
import Application from '../../pages/Application'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

function Root() {
  return (
    <div className="Root">
      <Router>
        <Switch>
          <Route exact path="/">
            <Application />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Root;
