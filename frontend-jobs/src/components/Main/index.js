import React from 'react';

import render from './render';

export class Main extends React.Component {
  static defaultProps = {
    render,
  };

  state = {
    files: [],
  };

  onFiles = files => this.setState({ files: Array.from(files) });

  render() {
    const { render: Render, ...nextProps } = this.props;
    const { files } = this.state;
    const { onFiles } = this;
    const props = {
      ...nextProps,
      onFiles,
      files,
    };

    return <Render {...props} />;
  }
};

export default Main;
