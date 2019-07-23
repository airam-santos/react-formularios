import * as React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  background: #ffffff;
  padding: 40px;
`;

interface BodyState {
  moviesCount: number;
}

export class Body extends React.Component<{}, BodyState> {
  constructor(props) {
    super(props);
    this.state = {
      moviesCount: 0
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({ moviesCount: this.state.moviesCount + 1 });
  }

  decrement() {
    this.setState({ moviesCount: this.state.moviesCount - 1 });
  }

  render() {
    return (
      <Container>
        <button onClick={this.increment}>+</button>
        {this.state.moviesCount}
        <button onClick={this.decrement}>-</button>
      </Container>
    );
  }
}
