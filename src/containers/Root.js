import React from 'react';
import createReactClass from 'create-react-class';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import {Route} from 'react-router';

// Routes
import Home from './HomePage/HomePage';
import About from './AboutPage/AboutPage';

const Root = createReactClass({
  render() {
    const {store, history} = this.props;

    if (!this.props) {
      return null;
    }

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </div>
        </ConnectedRouter>
      </Provider>
    );
  }
});

export default Root;
