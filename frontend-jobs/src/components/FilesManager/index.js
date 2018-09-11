import React from 'react';

import { upload, getInfos } from '../../services/fhir';

const context = React.createContext();

export class FilesManager extends React.Component {
  state = {
    total: 0,
  };

  upload = async file => {
    const uploaded = await upload(file);
    this.loadTotal();
    return uploaded;
  };

  async loadTotal() {
    const infos = await getInfos();
    this.setState({ total: infos.total });
  }

  render() {
    const { children } = this.props;
    const { total: totalFiles } = this.state;
    const { upload } = this;
    const value = { totalFiles, upload };

    return (
      <context.Provider
        value={value}>
        {children}
      </context.Provider>
    );
  }
}

export const withFilesManager = WrappedComponent => props => (
  <context.Consumer>
  {value => <WrappedComponent {...value} {...props} />}
  </context.Consumer>
);

export default FilesManager;
