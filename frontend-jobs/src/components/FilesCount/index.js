import React from 'react';

import render from './render';

export class FilesCount extends React.Component {
  static defaultProps = {
    render,
  };

  render() {
    const { render: Render, ...nextProps } = this.props;
    const props = {
      ...nextProps,
    };

    return <Render {...props} />;
  }
};

export default FilesCount;
