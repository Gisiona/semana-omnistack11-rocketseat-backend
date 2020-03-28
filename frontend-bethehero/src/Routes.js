import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import login from './pages/login';
import register from './pages/register';
import profile from './pages/profile';
import incident from './pages/incident';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={login} />
                <Route path='/register' exact component={register} />
                <Route path='/profile' exact component={profile} />
                <Route path='/incident/new' exact component={incident} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;