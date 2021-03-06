if (process.env.BROWSER) {
  require('./styles/_app.scss');
}
import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const App = createReactClass ({
  propTypes: {
    actions: PropTypes.object.isRequired,
    children: PropTypes.any.isRequired,
    location: PropTypes.any.isRequired
  },

  render() {
    if (!this.props.children) {
      return null;
    }

    return (
      <div>
        {this.props.children}
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
