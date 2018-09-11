import React from 'react';

import { upload, getInfos } from '../../services/fhir';
import ipcRenderer from '../../services/ipcRenderer';

const context = React.createContext();

export class FilesManager extends React.Component {
  state = {
    files: [],
    total: 0,
  };

  componentDidMount() {
    ipcRenderer.on('file', (event, { fileName, file }) => {
      this.upload(file, fileName, true)
    });
  }

  upload = async (file, name, force) => {
    if (!force &&
        (file.type !== 'application/pdf' ||
        file.size > 2097152)) return;

    this.addFile(file, name);

    const uploaded = await upload(file);

    this.updateFile(file, name);

    this.loadTotal();
    return uploaded;
  };

  addFile(file, name) {
    const { files } = this.state;
    const fileContainer = {
      name,
      file,
      sending: true,
      sent: false,
    };

    this.setState({ files: files.concat([fileContainer])});
  }

  updateFile(file, name) {
    const { files } = this.state;
    const pos = files.findIndex(f => f.file === file && f.name === name);

    if (pos === -1) return

    const fileContainer = files[pos];

    if (!fileContainer) return;

    fileContainer.sending = false;
    fileContainer.sent = true;

    const newFiles = [...files];
    newFiles.splice(pos, 1, fileContainer);

    this.setState({ files: newFiles });
  }

  async loadTotal() {
    const infos = await getInfos();
    this.setState({ total: infos.total });
  }

  render() {
    const { children } = this.props;
    const { total: totalFiles, files } = this.state;
    const { upload } = this;
    const value = { files, totalFiles, upload };

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
