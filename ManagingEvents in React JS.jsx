import React from 'react';

export class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
    this.add = this.add.bind(this);
    this.substract = this.substract.bind(this);
  }

  add(){
    this.setState({
      counter: ++this.state.counter
    })
  }

  substract(){
    this.setState({
      counter: --this.state.counter
    })
  }

  // Your event handlers
  render() {
    return (
      <div>
        <h1  id="counter">{this.state.counter}</h1>
        <button onClick={this.substract} type="button" id="decrement">
          Decrement
        </button>
        <button onClick={this.add} type="button" id="increment">
          Increment
        </button>
      </div>
    )
  }
}
