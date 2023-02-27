import React, { Component } from "react";
import CounterView from "../components/CounterView/CounterView";

class CounterContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countValue: 0,
      isEven: true,
    };
  }

  handleIncrement = () => {
    this.setState((state) => ({
      countValue: state.countValue + 1,
      isEven: !state.isEven,
    }));
  };

  handleDecrement = () => {
    if (this.state.countValue > 0) {
      this.setState((state) => ({
        countValue: state.countValue - 1,
        isEven: !state.isEven,
      }));
    }
  };

  handleReset = () => {
    this.setState({ countValue: 0, isEven: true });
  };

  render() {
    return (
      <CounterView
        countValue={this.state.countValue}
        isEven={this.state.isEven}
        handleIncrement={this.handleIncrement}
        handleDecrement={this.handleDecrement}
        handleReset={this.handleReset}
      />
    );
  }
}

export default CounterContainer;
