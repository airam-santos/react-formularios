import * as React from "react";

export interface AboutProps {
  name: string;
}

export default class About extends React.Component<AboutProps, {}> {
  render() {
    return <h1>About</h1>;
  }
}
