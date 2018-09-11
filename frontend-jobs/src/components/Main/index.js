import React from 'react';

import { withFilesManager } from '../FilesManager';
import render from './render';

export class Main extends React.Component {
  static defaultProps = {
    render,
  };

  onFiles = files => {
    const { upload } = this.props;

    for (const file of files) {
      upload(file, file.name);
    }
  };

  render() {
    const { render: Render, ...nextProps } = this.props;
    const { onFiles } = this;
    const props = {
      ...nextProps,
      onFiles,
    };

    return <Render {...props} />;
  }
};

export default withFilesManager(Main);
