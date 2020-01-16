"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const imagemin = require("gulp-imagemin");
const browserSync = require("browser-sync").create();
const sourcemaps = require("gulp-sourcemaps");
const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");
const concat = require("gulp-concat");
// compile scss into css
function style() {
  // 1. where is my scss file
  return (
    gulp
      .src("./static/scss/**/*.scss")
      .pipe(sourcemaps.init())
      // 2. pass that file through sass compiler
      .pipe(sass().on("error", sass.logError))
      .pipe(autoprefixer("last 2 versions"))
      .pipe(cleanCSS())
      // 3. where do I save the compiled CSS
      .pipe(sourcemaps.write())
      .pipe(gulp.dest("./static/css"))

      // 4. stream changes to all browser
      .pipe(browserSync.stream())
  );
}

function watch() {
  browserSync.init({
    proxy: "http://nwsp.local/"
  });
  gulp.watch("./static/scss/**/*.scss", style);
  gulp.watch("./*.php").on("change", browserSync.reload);
  gulp.watch("./static/js/*.js").on("change", browserSync.reload);
  gulp.watch("./templates/**/*.twig").on("change", browserSync.reload);
}

function imageminTask() {
  gulp
    .src("./static/img/*")
    .pipe(
      imagemin({
        interlaced: true,
        progressive: true,
        optimizationLevel: 5
      })
    )
    .pipe(gulp.dest("./dist/images"));
}

function concatJs() {
  gulp
    .src("./js/*.js")
    .pipe(concat("all.js"))
    .pipe(gulp.dest("./js/"));
}
exports.imageminTask = imageminTask;
exports.style = style;
exports.watch = watch;
exports.concat = concatJs;
