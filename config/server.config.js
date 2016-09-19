const historyApiFallback = require('connect-history-api-fallback');
module.exports = {
  "files": [
    'wp/**/*'
  ],
  "watchOptions": {
    "ignoreInitial": true,
    "ignored": '**/*.map'
  },
  "reloadDelay": 300,
  "proxy": 'localhost',
  "port": 3000,
  "middleware": [
    // historyApiFallback()
  ],
  "ghostMode": {
    "clicks": true,
    "scroll": true,
    "forms": {
      "submit": true,
      "inputs": true,
      "toggles": true
    }
  }
};