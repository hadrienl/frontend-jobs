import React from 'react';

import Dropzone from '../Dropzone';
import UploadFile from '../UploadFile';
import FilesCount from '../FilesCount';

export const MainRender = ({ onFiles, files, sent, sending }) => (
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
          {files.map((file, k) => (
          <li
            key={k}>
            <UploadFile
              file={file} />
          </li>
          ))}
        </ul>
        <FilesCount />
      </div>
      )}
  </Dropzone>
);

export default MainRender;
