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

gulp.task('watch', function() {
  gulp.watch([paths.lessDir + '*.less'], ['less']);
});

gulp.task('default', ['less', 'watch']);