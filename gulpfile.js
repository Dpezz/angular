var gulp = require('gulp');
var webserver = require('gulp-webserver');
var connect = require('gulp-connect');
var inject = require('gulp-inject');
var wiredep = require('wiredep').stream;
var notify = require("gulp-notify");

gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(webserver({
      port:'3000',
      livereload: true,
      open: true
    }));
});

gulp.task('html', function(){
  gulp.src('./app/**/*.html')
  .pipe(connect.reload());
});

gulp.task('inject', function(){
  var sources = gulp.src(['./app/scripts/**/*.js', './app/styles/**/*.css']);
  return gulp.src('index.html', {
    cwd: './app'
  })
  .pipe(inject(sources, {
    read: false,
    ignorePath: '/app'
  }))
  .pipe(gulp.dest('./app'));
});

gulp.task('wiredep', ['inject'], function(){
  gulp.src('./app/index.html')
  .pipe(wiredep({
    directory: './app/vendor',
    onError: function(error){
      consol.log(error.code);
    }
  }))
  .pipe(gulp.dest('./app'));
});

gulp.task('watch', function(){
  gulp.watch(['./app/**/*.html'], ['html']);
  gulp.watch(['./app/scripts/**/*.js'], ['inject']);
  gulp.watch(['./app/styles/**/*.css'], ['inject']);
  gulp.watch(['./bower.json'], ['wiredep']);
});

gulp.task('notify', function(){
  gulp.src("./app/test.ext")
    .pipe(notify("Hello Gulp!"));

});





gulp.task('default',['webserver', 'wiredep', 'watch', 'notify']);
