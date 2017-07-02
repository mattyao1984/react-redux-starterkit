import React from 'react';
import {render} from 'react-dom';
import Root from './containers/Root';
import createHistory from 'history/createBrowserHistory';
import configureStore from './store/configureStore';

const store = configureStore();
const history = createHistory();

render(
  <Root store={store} history={history}/>,
  document.getElementById('root')
);
