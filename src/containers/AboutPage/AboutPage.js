import './_aboutPage.css';

import React from 'react';
import createReactClass from 'create-react-class';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const AboutPage = createReactClass({
  render() {
    if (!this.props) {
      return null;
    }

    return (
      <div className="page-wrapper home-page">
        <h1>About</h1>
      </div>
    );
  }
});

/**
 * Return the app properties
 *
 * @return {{}} props The app properties to return
 */
function mapStateToProps() {
  const props = {};
  return props;
}

/**
 * Map ther dispatcher to the properties
 *
 * @param {dispatch} dispatch The dispatch request
 * @return {{actions: *}} actionMap The actions that are binded to perform
 */
function mapDispatchToProps(dispatch) {
  const actions = {};
  const actionMap = {actions: bindActionCreators(actions, dispatch)};
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
