const gulp = require('gulp');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

gulp.task('html', function(){
  return gulp.src('source/*.html')
    .pipe(gulp.dest('build'))
});

gulp.task('css', function(){
  return gulp.src('source/css/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('build/css'))
});

gulp.task('js', function(){
  return gulp.src('source/js/*.js')
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('build/js'))
    .pipe(rename('scripts.min.js'))
    .pipe(babel({presets: ['es2015']}))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'))
});

gulp.task('img', () => {
  return gulp.src('source/img/**/*')
    .pipe(gulp.dest('build/img'));
});

gulp.task('build', [ 'html', 'css', 'js', 'img' ]);