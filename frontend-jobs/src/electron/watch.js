const chokidar = require('chokidar');

module.exports = function watch({ path, onAdd = () => null }) {
  const watcher = chokidar.watch(path, {
    ignored: /[\/\\]\./,
    persistent: true
  });

  watcher.on('add', path => onAdd(path));
}
