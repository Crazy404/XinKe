const { series, src, dest } = require('gulp')
const connect = require('./config/gulp.dev').default
const { clean, js, html, css, inject, img } = require('./config/gulp.common')

let build = series(clean, html, js, css, img, inject)

exports.build = build
exports.server = series(build, connect)