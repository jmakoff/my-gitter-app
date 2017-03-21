import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import './index.css';
var userName='Guest';
function change () {
    userName="wdawdadawd";
    alert('awdawdad')

}
setTimeout(change, 122000);

ReactDOM.render(
  <Header  name={userName}/>,
  document.getElementById('header')
);
