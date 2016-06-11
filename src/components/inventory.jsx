import React from 'react';
import Item from './item';

export default class Inventory extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <div className="inventory">
      <Item />

    </div>
  }


}
