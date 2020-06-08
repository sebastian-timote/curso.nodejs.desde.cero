
const gulp = require('gulp'),
      pug = require('gulp-pug'),
      sass = require('gulp-sass'),
      babel = require('gulp-babel'),
      imagemin = require('gulp-imagemin'),
      pngquant = require('gulp-pngquant'),
      svgmin = require('gulp-svgmin'),
      webp = require('gulp-webp'),
      useref = require('gulp-useref'),
      concat = require('gulp-concat'),
      uncss = require('gulp-uncss'),
      autoprefixer = require('gulp-autoprefixer'),
      cleanCSS = require('gulp-clean-css'),
      uglify = require('gulp-uglify'),
      htmlmin = require('gulp-htmlmin'),
      dir = {//lo primero crear la cerpeta de direcciones
          src: 'src',
          dist: 'dist',
          nm: 'node_modules'
      },
      files = {

      },
      opts = {//opciones para cada plugin

      };

gulp.task('pug', () => {

})
