var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
var runSequence = require('run-sequence');
var rename = require("gulp-rename");


gulp.task('images-large', function() {
  return gulp.src("public/images/*169.jpg")
  .pipe(imageResize({
    width: 800,
    quality: 0.7,
    imageMagick: true
  }))
  .pipe(rename(function (path) { path.basename += "-large"; }))
  .pipe(gulp.dest('public/images'));

})

gulp.task('images-medium', function() {
  return gulp.src("public/images/*169.jpg")
  .pipe(imageResize({
    width: 550,
    quality: 0.7,
    imageMagick: true
  }))
  .pipe(rename(function (path) { path.basename += "-medium"; }))
  .pipe(gulp.dest('public/images'));
})



gulp.task('build', function(callback) {
  runSequence(['images-large', 'images-medium', 'images-land'],
              callback);
});


gulp.task('default', ['build']);
