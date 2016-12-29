import React from 'react';
import { Route, IndexRedirect, IndexRoute, Redirect } from 'react-router';

import App from './components/App/App';
import HomePage from './pages/HomePage/HomePage';
import SecondPage from './pages/SecondPage/SecondPage';

export default (
    <Route path="/" component={ App }>
        <IndexRoute component={ HomePage } />
        <Route path="/second" component={ SecondPage } />
        <Redirect from="/:anything" to="/"/>
    </Route>
);