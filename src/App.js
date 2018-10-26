import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getListItems } from './redux/commands';

class App extends Component {

  render() {
    this.props.getListItems();
    return (
        <h1>123</h1>
    );
  }
}

const mapStateToProps = state => ({
  list: state.list,
});

const mapCommandsToProps = dispatch => ({
  getListItems: () => dispatch(getListItems()),
});

export default connect(mapStateToProps, mapCommandsToProps)(App);
