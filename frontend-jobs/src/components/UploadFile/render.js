import React from 'react';

export const UploadFileRender = ({ file, sending, sent }) => (
  <React.Fragment>
    {sending &&
    <span
      className="loading"
      role="img"
      aria-label="wait for it">🧐</span>}
    {sent &&
    <span
      role="img"
      aria-label="uploaded">👌</span>}
    {file.name}
  </React.Fragment>
);

export default UploadFileRender;
