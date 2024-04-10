import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from '/Users/chirag/Desktop/interships/Hirademy/react-admin/src/resources/slugs.js';

function PublicRoutes() {
    return (
        <Switch>
            <Route path={SLUGS.login} render={() => <div>login</div>} />
            <Route path={SLUGS.signup} render={() => <div>signup</div>} />
            <Route path={SLUGS.forgotPassword} render={() => <div>forgotPassword</div>} />
            <Redirect to={SLUGS.login} />
        </Switch>
    );
}

export default PublicRoutes;
