var gulp = require('gulp'),
  gutil = require('gulp-util'),
  less = require('gulp-less'),
  minifycss = require('gulp-csso'),
  rename = require('gulp-rename'),
  concat = require('gulp-concat');

  /*  Set your environment */

var paths = {
  "lessDir": "less/",
  "cssDir": "css/"
}

gulp.task('less', function() {
  return gulp.src(paths.lessDir + "bootstrap.less")
    .pipe(less({
      sourceMap: true // If you don't need sourcemaps, set to false.
    }))
    .pipe(rename("bootstrap.css"))
    .pipe(gulp.dest(paths.cssDir));
});

gulp.task('concat', function() {
  return gulp.src([paths.cssDir + 'bootstrap.css', paths.cssDir + 'onepage-scroll.css'])
    .pipe(concat('style.css'))
    .pipe(gulp.dest(paths.cssDir))
});

gulp.task('minify', function() {
  return gulp.src([paths.cssDir + "style.css"])
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(minifycss())
    .pipe(gulp.dest(paths.cssDir));
});

gulp.task('watch', function() {
  gulp.watch([paths.lessDir + '*.less'], ['less', 'concat', 'minify']);
});

gulp.task('default', ['watch']);