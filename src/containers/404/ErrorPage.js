import './_errorPage.css';

import React from 'react';
import createReactClass from 'create-react-class';
import {connect} from 'react-redux';
import {browserHistory, Link} from 'react-router';

const ErrorPage =  createReactClass({
  render() {
    if (!this.props) {
      return null;
    }

    return (
      <div className="page-wrapper">
        <h1>Page not found: 404 error</h1>
      </div>
    );
  }
});

export default ErrorPage;
