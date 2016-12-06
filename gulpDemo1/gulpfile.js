var gulp = require('gulp');
var reactGulp = require('gulp-react');

gulp.task('jsx', function() {
	gulp.src('./app.jsx')
	.pipe(reactGulp())
	.pipe(gulp.dest('./'))
});

gulp.task('default', ['jsx']);
