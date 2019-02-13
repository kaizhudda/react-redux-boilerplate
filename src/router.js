import React from 'react'
import { Route, Switch } from 'react-router-dom';
import PlayerStats from './components/PlayerStats';

const Routes = () => {
  return (
    <Switch>
        <Route path="/" exact component={PlayerStats} />
    </Switch>
  );
};

export default Routes;