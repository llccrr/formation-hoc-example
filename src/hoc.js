import React, { Component } from 'react';

export const hocCpt = PureTest =>
  class extends Component {
    state = {
      seconds: 0
    };

    componentDidMount() {
      const { delay } = this.props;

      this.interval = setTimeout(
        () =>
          setInterval(() => {
            this.setState(state => ({ seconds: state.seconds + 1 }));
          }, 1000),
        delay || 0
      );
    }

    render() {
      return <PureTest {...this.props} {...this.state} />;
    }
  };
