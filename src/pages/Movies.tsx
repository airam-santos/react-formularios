import * as React from "react";

export interface MoviesProps {
  name: string;
}

export default class Movies extends React.Component<MoviesProps, {}> {
  render() {
    return <h1>Movies</h1>;
  }
}
