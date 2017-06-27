import React, { Component } from 'react';
import UserList from '../containers/UserList';
import UserDetails from '../containers/UserDetails';

export default class App extends Component {
  render() {
    return (
      <div>
        <UserList/>
        <UserDetails/>
      </div>
    );
  }
}
