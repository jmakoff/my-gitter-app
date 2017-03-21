import React, { Component } from 'react';
import './scss/App.css';
import data from '../model/data';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Welcome to my app, {this.props.name}</h1>


      </div>
    );
  }
}

export default Header;
