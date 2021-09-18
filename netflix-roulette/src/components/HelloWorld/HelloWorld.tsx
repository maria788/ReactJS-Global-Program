import * as React from "react";

export class HelloWorld extends React.Component<{ name: string }, {}> {
  render() {
    return React.createElement("h1", null, `Hello ${this.props.name}`);
  }
}
