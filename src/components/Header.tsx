import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/newmovie">NewMovie</Link>
        </li>
      </ul>
    );
  }
}

/*import styled from "@emotion/styled";
import { connect } from "react-redux";

const Container = styled.div`
  padding: 5px;
  background: lightblue;
  color: black;
`;

interface HeaderState {
  moviesCount?: number;
}
interface HeaderProps {
  value?: number;
  dispatch?: any;
}
export class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props) {
    super(props);
    this.state = {
      moviesCount: 0
    };
  }

  render() {
    return <Container>Total movies {this.state.moviesCount}</Container>;
  }
}
const mapStateToProps = state => {
  return { value: state.movies.value };
};
const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
*/
