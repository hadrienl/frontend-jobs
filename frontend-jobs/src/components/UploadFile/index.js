import React from 'react';
import PropTypes from 'prop-types';

import { withFilesManager } from '../FilesManager';
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

  async componentDidMount() {
    const { upload, file } = this.props;

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
    const props = {
      ...nextProps,
      sent,
      sending,
    };

    return <Render {...props} />;
  }
};

export default withFilesManager(UploadFile);
