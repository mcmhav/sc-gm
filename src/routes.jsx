import React from 'react';

import {
    Router,
    Route,
    IndexRoute,
    hashHistory
} from 'react-router';

import App from './components/features/App';
import FrontView from './components/features/FrontView';

const routes = (
    <Router history={ hashHistory }>
        <Route path='/' component={App}>
            <IndexRoute component={FrontView} />
            <Route path='/front' component={FrontView} />
        </Route>
    </Router>
);

export default routes;
