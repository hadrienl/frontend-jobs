function loadIpcRenderer() {
  if (global.require) {
    const electron = global.require('electron');
    const fs = electron.remote.require('fs'); // eslint-disable-line no-unused-vars
    return electron.ipcRenderer;
  }
  return {
    on() {}
  };
}


export default loadIpcRenderer();
