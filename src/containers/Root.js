import React from 'react';
import createReactClass from 'create-react-class';
import {Provider} from 'react-redux';
import {Router} from 'react-router';
import routes from '../routes';

const Root = createReactClass({
  render() {
    const {store, history} = this.props;

    if (!this.props) {
      return null;
    }

    return (
      <Provider store={store}>
        <Router history={history} routes={routes}/>
      </Provider>
    );
  }
});

export default Root;
