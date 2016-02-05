import React from 'react';
import { ReactRouter, Router, Route, Link, hashHistory } from 'react-router';

import cApp from './components/app';
import cBookDetails from './components/bookDetails';


const Routes = (
    <Router history={hashHistory}>
        <Route path="/" component={cApp} />
        <Route path="/details/:bookId" component={cBookDetails} />

    </Router>
);

export default Routes;