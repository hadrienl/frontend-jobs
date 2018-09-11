import React from 'react';

import Dropzone from '../Dropzone';
import FilesManager from '../FilesManager';
import UploadFile from '../UploadFile';
import FilesCount from '../FilesCount';

export const MainRender = ({ onFiles, files, sent, sending }) => (
  <Dropzone
    className="main dropzone"
    onFiles={onFiles}>
    <FilesManager>
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
            {files.map(file => (
            <li
              key={file.name}>
              <UploadFile
                file={file} />
            </li>
            ))}
          </ul>
          <FilesCount />
        </div>
        )}
    </FilesManager>
  </Dropzone>
);

export default MainRender;
