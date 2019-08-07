'use strict';

var gulp        = require('gulp'),
    prefixer    = require('gulp-autoprefixer'),
    sass        = require('gulp-sass'),
    cssnano     = require('gulp-cssnano'),
    uglify      = require('gulp-uglify'),
    rename      = require('gulp-rename'),
    sourcemaps  = require('gulp-sourcemaps'),
    normalize   = require('node-normalize-scss'),
    plumber     = require('gulp-plumber'),
    browserSync = require('browser-sync').create(),
    reload      = browserSync.reload;

require('dotenv').load({path: '.env'});

var input   = './scss/*.scss',
    output  = './css',
    scripts = './scripts/*.js',
    twig    = ['./templates/base/*.twig','./includes/*.twig'];

gulp.task('sass',function(){
  return gulp
    .src(input)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: normalize.includePaths
    }).on('error',sass.logError))
    .pipe(rename('sndev_d8.min.css'))
    .pipe(cssnano())
    .pipe(sourcemaps.write())
    .pipe(prefixer())
    .pipe(gulp.dest(output))
    .pipe(browserSync.stream());
});

gulp.task('js',function(){
  return gulp
    .src(scripts)
    .pipe(plumber())
    .pipe(rename('sndev_d8.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./scripts/min'))
    .pipe(browserSync.stream());
});

gulp.task('serve',['sass','js'],function(){
  browserSync.init({
    proxy: process.env.DD_URL,
    notify: false
  });
  gulp.watch(input,['sass']).on('change',reload);
  gulp.watch(scripts,['js']).on('change',reload);
  gulp.watch(twig).on('change',reload);
});

gulp.task('default',['serve']);
