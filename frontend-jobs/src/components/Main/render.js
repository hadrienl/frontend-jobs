import React from 'react';

import Dropzone from '../Dropzone';

export const MainRender = ({ onFiles, files }) => (
  <Dropzone
    className="main dropzone"
    onFiles={onFiles}>
    {!files.length
    ? (
      <p
        className="main__drop">Drop your file here</p>
      )
    : (
      <div
        className="main__dropped">
        <p>Thanks for this {files.length} files :</p>
        <ul
          className="filesList">
          {files.map(file => console.log({file}) || (
          <li
            key={file.name}>{file.name}</li>
          ))}
        </ul>
      </div>
      )}
  </Dropzone>
);

export default MainRender;
