import React from 'react';

import { withFilesManager } from '../FilesManager';

export const FilesCountRender = ({ totalFiles }) => !!totalFiles && (
  <p>{totalFiles} files loaded</p>
);

export default withFilesManager(FilesCountRender);
