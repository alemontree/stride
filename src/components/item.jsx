import React from 'react';

export default class Item extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <div class="item">
      <span className="name">Milk Chocolate</span>
      <span className="price">$4.50</span>
      <p className="description">Milk chocolate milder and sweeter because it is made with milk and a higher sugar content than the darker varieties. It also has a smaller quantity of chocolate liquor and, therefore, fewer flavors and aromas</p>
    </div>
  }
}
