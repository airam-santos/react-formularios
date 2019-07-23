import * as React from "react";

export interface HomeProps {
  name: string;
}

export default class Home extends React.Component<HomeProps, {}> {
  render() {
    return <h1>Home</h1>;
  }
}
