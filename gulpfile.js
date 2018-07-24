var gulp = require('gulp')
jade = require('gulp-jade')
sass = require('gulp-sass')
plumber = require('gulp-plumber')


gulp.task('images', function () {
    return gulp.src('images/**').pipe(gulp.dest('dist/images'))
})

gulp.task('sass', function () {
    return gulp.src('sass/**')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
})

gulp.task('jade', function () {
    return gulp.src('jade/*.jade')
        .pipe(plumber())
        .pipe(jade())
        .pipe(gulp.dest('dist'))
})

gulp.task('see', function () {
    gulp.watch('sass/**', ['sass'])
    gulp.watch('jade/*.jade', ['jade'])
})

gulp.task('default', ['see']);