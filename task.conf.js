module.exports = {
  config: {
    dest: "wp",
    sasssrc : "src/sass",
    imgsrc: "src/images/**/*",
    imgdir: "src/images"
  },
  task: {
    "clean": "rimraf ${dest}",
    "webpack": "webpack --config ./config/webpack.config.js",
    "imagemin": "imagemin ${imgsrc} --out-dir=${dest}/assets/images",
    "pug": "pug ${viewsrc} -o ${dest} -P",
    "sprite": "spritesmith --rc ./config/sprite.config.js",
    "sasslint": "sass-lint ${sasssrc}/**/*.scss -v",
    "sass": "node-sass ${sasssrc} --output ${dest}/assets/css --source-map ${dest}/assets/css",
    "postcss": "postcss -c ./config/postcss.config.js -r ${dest}/assets/css/**/*.css -m",

    "build:copy": "sync-dir --config ./config/sync.config.js",
    "build:script": "tasks webpack",
    "build:image": "tasks imagemin",
    "build:sass": "tasks sasslint && tasks sass && tasks postcss",

    "server:browser": "wait-on http://localhost && browser-sync start --config ./config/server.config.js",
    "server:docker": "docker-compose up --build",
    "test": "karma start --single-run --no-auto-watch",
    "build": "tasks sprite && tasks build:*",
    "watch": "tasks watch:*",
    "production": "tasks production:*",

    "watch:script": "tasks webpack -- -w",
    "watch:sass": "chokidar ${sasssrc}/**/*.scss -c 'tasks build:sass'",
    "watch:image": "chokidar ${imgdir}/**/* -c 'tasks build:image'",
    "watch:copy": "sync-dir -w --config ./config/sync.config.js",
    "watch:test": "tasks test -- --no-single-run --auto-watch",
    "watch:server": "tasks server:*",

    "production:copy": "sync-dir --config ./config/sync.config.js",
    "production:script": "tasks webpack -- -p",
    "production:image": "tasks imagemin",
    "production:sass": "tasks sasslint && tasks sass && tasks postcss",
  }
};