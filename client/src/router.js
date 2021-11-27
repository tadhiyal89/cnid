import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Landing from './apps/landing/containers';
function RouterConfig() {
  return (
    <Router basename="/">
      <Switch>
        <Route path="/" component={Landing} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
