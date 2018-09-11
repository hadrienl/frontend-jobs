import React from 'react';

export const DropzoneRender = ({ onDragLeave, onDragOver, onDrop, hover, className = '', children }) => (
  <div
    onDragLeave={onDragLeave}
    onDragOver={onDragOver}
    onDrop={onDrop}
    className={`${hover ? 'hover' : ''} ${className}`}>
    {children}
  </div>
);

export default DropzoneRender;
