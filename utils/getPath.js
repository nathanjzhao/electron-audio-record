var os = require("os");
const path = require("path");

function getPath() {
  switch (os.platform()) {
    case 'darwin':
      return path.join(__dirname, '../bin', 'sox-14.4.2-darwin');
    case 'win32':
      return path.join(__dirname, '../bin', 'sox-14.4.2-win32');
    case 'linux':
      return path.join(__dirname, '../bin', 'sox-14.4.2-linux');
    default:
      throw new Error('Unsupported platform');
  }
}

module.exports = getPath;