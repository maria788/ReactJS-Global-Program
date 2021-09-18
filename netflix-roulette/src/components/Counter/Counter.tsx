import * as React from "react";
import { Box } from "@material-ui/core";
import { CounterButton } from "./CounterButton";

interface CounterState {
  count: number;
}

export class Counter extends React.PureComponent<{}, CounterState> {
  state = { count: 0 };

  handleCountIncrease() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  handleCountDecrease() {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  }

  render() {
    return (
      <Box mt={3} display="flex" flexDirection="row" alignItems="center">
        <CounterButton
          handleClick={this.handleCountDecrease.bind(this)}
          content="-"
        />
        <Box minWidth={10} mx={2}>
          {this.state.count}
        </Box>
        <CounterButton
          handleClick={this.handleCountIncrease.bind(this)}
          content="+"
        />
      </Box>
    );
  }
}
