module.exports = {
  use: [
    'autoprefixer',
    'css-mqpacker'
  ],
  autoprefixer: {
    browsers: [
      'last 3 version',
      'ie >= 9',
      'Android 4.0'
    ],
  },
  'css-mqpacker': {
  }
};