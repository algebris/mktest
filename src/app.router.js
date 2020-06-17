import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Calculator } from 'apps/calculator';

export function AppRouter() {
  return (
    <Switch>
      <Route exact path="/" component={Calculator} />
    </Switch>
  );
}
