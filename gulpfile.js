var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function () {
    gulp.src('./style/*.less')
        .pipe(less())
        .pipe(gulp.dest('./css/'));
});

gulp.task('watch', function () {
    gulp.watch('./style/*.less', ['less']);
});