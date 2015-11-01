'use strict';

const gulp = require('gulp');
const webserver = require('gulp-webserver');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');

gulp.task('server', function () {
    gulp.src('./build')
        .pipe(webserver({
            host: '0.0.0.0',
            port: 8080,
            fallback: 'index.html',
            livereload: true
        }))
});

gulp.task('build', function () {
    browserify({
        entries: './app/index.js',
        extensions: ['.js'],
        debug: true
    })
    .transform(babelify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./build/js/'))
});

gulp.task('watch', function () {
    gulp.watch('./app/**/*.js', ['build']);
});

gulp.task('default', ['server', 'watch']);
