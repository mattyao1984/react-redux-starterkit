import './_homePage.css';

import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import {browserHistory, Link} from 'react-router';

class HomePage extends React.Component{
  constructor(props) {
    super(props);
  }

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
}

export default HomePage;
