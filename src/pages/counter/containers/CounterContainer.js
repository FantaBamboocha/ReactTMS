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

  componentDidUpdate(_, prevState) {
    if (this.state.countValue !== prevState.countValue) {
      this.setState({ isEven: this.state.countValue % 2 === 0 ? true : false });
    }
  }

  handleIncrement = () => {
    this.setState((state) => ({
      countValue: state.countValue + 1,
    }));
  };

  handleDecrement = () => {
    if (this.state.countValue > 0) {
      this.setState((state) => ({
        countValue: state.countValue - 1,
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
