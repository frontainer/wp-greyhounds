module.exports = {
  config: {
    dest: "wp",
    sasssrc : "src/sass",
    imgsrc: "src/images/**/*",
    imgdir: "src/images",
    viewsrc: "src/view/*.pug"
  },
  task: {
    "clean": "rimraf ${dest}",
    "webpack": "webpack --config ./config/webpack.config.js",
    "imagemin": "imagemin ${imgsrc} --out-dir=${dest}/assets/images",
    "pug": "pug ${viewsrc} -o ${dest} -P",
    "htmlhint": "htmlhint ${dest}/**/*.html",
    "sprite": "spritesmith --rc ./config/sprite.config.js",
    "sasslint": "sass-lint ${sasssrc}/**/*.scss -v -q",
    "sass": "node-sass ${sasssrc} --output ${dest}/assets/css --source-map ${dest}/assets/css",
    "postcss": "postcss -c ./config/postcss.config.js -r ${dest}/assets/css/**/*.css -m",

    // "build:html": "tasks pug && tasks htmlhint",
    "build:copy": "sync-dir",
    "build:script": "tasks webpack",
    "build:image": "tasks imagemin",
    "build:sass": "tasks sasslint && tasks sass && tasks postcss",

    "server": "browser-sync start --config ./config/server.config.js",
    "docker": "docker-compose up",

    "test": "karma start --single-run --no-auto-watch",
    "build": "tasks sprite && tasks build:*",
    "watch": "tasks watch:*",

    "watch:docker": "tasks docker",
    "watch:server": "tasks server",
    "watch:script": "tasks webpack -- -w",
    "watch:sass": "nodemon -q -w ${sasssrc} -e scss -x tasks build:sass",
    "watch:image": "nodemon -q -w ${imgdir} -e gif,jpg,png -x tasks build:image",
    // "watch:htmlhint": "nodemon -q -w ${dest} -e html -x tasks htmlhint",
    "watch:copy": "sync-dir -w",
    // "watch:html": "tasks pug -- -w",
    "watch:test": "tasks test -- --no-single-run --auto-watch",
  }
};