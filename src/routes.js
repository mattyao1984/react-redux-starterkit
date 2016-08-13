import React from 'react';
import {Route} from 'react-router';
import App from './App';
import HomePage from './containers/HomePage/HomePage';
import ErrorPage from './containers/404/ErrorPage';

export default (
  <Route component={App}>
    <Route path="/" component={HomePage} />
    <Route path="*" component={ErrorPage} />
  </Route>
);
