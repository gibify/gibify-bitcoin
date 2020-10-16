import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Bitcoin from '../pages/Bitcoin';
import Profile from '../pages/Profile';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Profile} />
        <Route path="/compre-bitcoin" component={Bitcoin} />
    </Switch>
);

export default Routes;
