const gulpCopy = require('gulp-copy')
const gulp = require('gulp')
const del = require('del')
const path = require('path')
const liveServer = require('live-server')
const gulpMinify = require('gulp-minify')

const dist = 'dist'

function minify() {
  return gulp
    .src('src/**/*.js')
    .pipe(
      gulpMinify({
        ext: { min: '.min.js', src: '.js' },
        exclude: ['lib']
      })
    )
    .pipe(gulp.dest(dist))
}

async function clean() {
  return await del(['dist'])
}

function copy() {
  return gulp
    .src(['./src/*.html', './src/*.css', './src/*.json', './src/lib/**/*.*'])
    .pipe(gulpCopy(dist, { prefix: 1 }))
}

function liveserver() {
  return liveServer.start({
    root: path.resolve(__dirname, 'src'),
    open: false,
    logLevel: 1
  })
}

const build = gulp.series(copy, minify)

exports.dev = liveserver
exports.minify = minify
exports.build = build
exports.copy = copy
exports.clean = clean

exports.default = build
