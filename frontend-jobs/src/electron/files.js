const fs = require('fs');
const fileType = require('file-type');

function read(path) {
  const fileName = path.split(/\//).pop();
  const data = fs.readFileSync(path);
  const type = fileType(data).mime;
  const size = fs.statSync(path).size;
  return { fileName, data, type, size };
}

module.exports = {
  read,
}
