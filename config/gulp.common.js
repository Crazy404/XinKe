const { series, src, dest } = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const ginject = require('gulp-inject')
const del = require('del')
const autoprefixer = require('gulp-autoprefixer')


async function clean(cb) {
  await del('docs')
  cb()
}

function html(cb) {
  src('src/index.html')
    .pipe(dest('docs'))
  cb()
}

function css(cb) {
  src('src/css/*.css')
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(dest('docs/css'))
  cb()
}

function js(cb) {
  src(['src/js/*.js'])
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(dest('docs/js'))
  
  cb()
}

function img(cb) {
  src(['src/img/*.png'])
    .pipe(dest('docs/img'))
  src(['src/img/*.ico'])
    .pipe(dest('docs'))
  
  cb()
}

function inject(cb) {
  src('src/index.html')
    .pipe(ginject(src(['./src/**/*.js', './src/**/*.css'], {read: false}), {
      transform: function (filepath, file) {
        let filename = filepath.match(/[^\/]+\.\w+$/)[0]
        if (filepath.indexOf('js') > -1) {
          return `<script src="./js/${filename}"></script>`
        } else if (filepath.indexOf('css') > -1) {
          return `<link rel="stylesheet" href="./css/${filename}">`
        }
      }
    }))
    .pipe(dest('docs'))
  cb()
}

exports.clean = clean
exports.html = html
exports.js = js
exports.css = css
exports.img = img
exports.inject = inject