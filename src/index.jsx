"use strict";

import React from 'react'
import ReactDOM from 'react-dom';
import Inventory from './components/inventory';
import Cart from './components/cart';


class Hello extends React.Component {
  constructor(){
    super();
  }
  render() {
    return <div>Hello World! Welcome to my world!</div>;
  }
}
ReactDOM.render(
  <div className="container">
    <Inventory />
    <Cart />
  </div>,
  document.getElementById('app')
);

