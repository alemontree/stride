"use strict";
import React from 'react'
import ReactDOM from 'react-dom';
import Inventory from './components/inventory';
import Cart from './components/cart';
import data from 'json!../inventory.json';
import makeStore from './store';

console.log(data);
export const store = makeStore();
store.dispatch({
  type: "SET_INVENTORY",
  inventory: data
});

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

