import './_homePage.css';

import React from 'react';
import createReactClass from 'create-react-class';
import {connect} from 'react-redux';
import {browserHistory, Link} from 'react-router';

const HomePage = createReactClass({
  render() {
    if (!this.props) {
      return null;
    }

    return (
      <div className="page-wrapper home-page">
        <h1>Home</h1>
      </div>
    );
  }
});

export default HomePage;
