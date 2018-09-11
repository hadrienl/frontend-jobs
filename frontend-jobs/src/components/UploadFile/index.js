import React from 'react';
import PropTypes from 'prop-types';

import upload from '../../services/upload';
import render from './render';

export class UploadFile extends React.Component {
  static propTypes = {
    file: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  };

  static defaultProps = {
    render,
  };

  state = {};

  componentDidMount() {
    this.upload();
  }

  async upload() {
    const { file } = this.props;

    this.setState({
      sent: false,
      sending: true,
    });

    await upload(file);

    this.setState({
      sent: true,
      sending: false,
    });
  }

  render() {
    const { render: Render, ...nextProps } = this.props;
    const { sent, sending } = this.state;
    console.log({sent, sending})
    const props = {
      ...nextProps,
      sent,
      sending,
    };

    return <Render {...props} />;
  }
};

export default UploadFile;
