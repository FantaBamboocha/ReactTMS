import React, { Component } from "react";

import CounterView from "../../../components/CounterView/CounterView";

class CounterContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countValue: 0,
    };
  }

  componentDidUpdate(_, prevState) {
    if (this.state.countValue !== prevState.countValue) {
      this.setState({ isEven: this.state.countValue % 2 === 0 });
    }
  }

  handleIncrement = () => {
    this.setState((state) => ({
      countValue: state.countValue + 1,
    }));
  };

  handleDecrement = () => {
    this.setState((state) => ({
      countValue: state.countValue - 1,
    }));
  };

  handleReset = () => {
    this.setState({ countValue: 0 });
  };

  render() {
    const { state, handleIncrement, handleDecrement, handleReset } = this;
    const { countValue } = state;

    return (
      <CounterView
        countValue={countValue}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleReset={handleReset}
      />
    );
  }
}

export default CounterContainer;
