const { series, src, dest, watch } = require('gulp')
const path = require('path')
const del = require('del')
const chalk = require('chalk')
const browser = require('browser-sync')
const { js, css, html, img, inject } = require('./gulp.common')

function reload(cb) {
  browser.reload()
  cb()
  console.log(chalk.green('Server at http://localhost:8080'))
}

async function cleanHtml(cb) {
  await del('docs/*.html')
  cb()
}

async function cleanJs(cb) {
  await del('docs/js')
  cb()
}

async function cleanCss(cb) {
  await del('docs/css')
  cb()
}

async function cleanImg(cb) {
  await del('docs/img')
  cb()
}

function connect(cb) {
  let config = {
    port: 8080,
    basePath: 'docs',
    index: 'index.html',
    uri: '127.0.0.1'
  }
  
  browser.init({
    notify: false,
    server: {
      baseDir: path.resolve(__dirname, '../docs')
    },
    port: 8080
  })
  
  watch('src/index.html', series(cleanHtml, inject, reload))
  watch('src/js/*.js', series(cleanJs, js, inject, reload))
  watch('src/css/*.css', series(cleanCss, css, inject, reload))
  watch('src/img/*', series(cleanImg, img, inject, reload))
  
  cb()
}

exports.default = series(connect)