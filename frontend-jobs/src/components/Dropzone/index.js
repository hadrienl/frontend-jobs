import React from 'react';
import PropTypes from 'prop-types';

import render from './render';

export class Dropzone extends React.Component {
  static propTypes = {
    onFiles: PropTypes.func,
  };

  static defaultProps = {
    render,
    onFiles() {},
  };

  state = {
    hover: false,
  };

  onDragLeave = e => {
    this.setState({ hover: false });
  }

  onDragOver = e => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ hover: true });
  }

  onDrop = e => {
    const { onFiles } = this.props;
    const { dataTransfer: { files } } = e;
    e.stopPropagation();
    e.preventDefault();
    onFiles(files);
    this.setState({ hover: false });
  }

  setEl = el => this.el = el;

  render() {
    const { render: Render, ...nextProps } = this.props;
    const { hover } = this.state;
    const { setEl, onDragLeave, onDragOver, onDrop } = this;
    const props = {
      ...nextProps,
      setEl,
      onDragLeave, onDragOver, onDrop,
      hover,
    };

    return <Render {...props} />;
  }
};

export default Dropzone;
