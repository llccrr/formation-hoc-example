import React, { Component } from "react";

export const hoc = PureTest =>
  class extends Component {
    state = {
      seconds: 0
    };

    componentDidMount() {
      this.interval = setInterval(() => {
        this.setState(state => ({ seconds: state.seconds + 1 }));
      }, 1000);
    }

    render() {
      return <PureTest {...this.props} {...this.state} />;
    }
  };
