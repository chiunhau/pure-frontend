var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');

var sassAllPath = './src/scss/**/*.scss';
var jadeAllPath = './src/templates/**/*.jade';

// Sass

gulp.task('sass', function() {
	return gulp.src('./src/scss/main.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./public/stylesheets'))
});

gulp.task('sass:min', function() {
	return gulp.src('./src/scss/main.scss')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(gulp.dest('./public/stylesheets'))
});

gulp.task('sass:watch', function() {
	gulp.watch(sassAllPath, ['sass']);
})

//Jade

gulp.task('jade', function() {
	return gulp.src('./src/templates/*.jade')
		.pipe(jade({
      pretty: true
    })) // pip to jade plugin
		.pipe(gulp.dest('./public')); // tell gulp our output folder
});

gulp.task('jade:watch', function() {
	gulp.watch(jadeAllPath, ['jade']);
})

gulp.task('dev', ['sass', 'sass:watch', 'jade', 'jade:watch']);