const React = require('react');

// Don't change PcDisplay
const PcDisplay = (props) => {
  return (<div>
    <h1>{props.title}</h1>
    <p id="price">£{props.price}</p>
    <ul>
      <li><label>CPU</label> <span>{props.cpu}</span></li>
      <li><label>RAM</label> <span>{props.ram}</span></li>
      <li><label>SSD</label> <span>{props.ssd}</span></li>
    </ul>
  </div>);
};

// Implement HOC -> returns a functions that wraps the passed in `PcDisplay` component
let withPriceModel = (Component, priceIncrease = 0) => (props) => {
  const defaultPrice = 50;
  const newProps = {
    ...props,
    price: defaultPrice + priceIncrease,
  }
  return (<Component {...newProps} />);
}

// Build basic and pro model components using `withPriceModel`
let BasicModel = withPriceModel(PcDisplay)

let ProModel = withPriceModel(PcDisplay, 60)
