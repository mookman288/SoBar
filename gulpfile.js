//Declare constiables.
const gulp		=	require('gulp');
const imagemin	=   require('gulp-imagemin');
const minifyCSS	=	require('gulp-clean-css');
const rename	=	require('gulp-rename');
const sass		=	require('gulp-sass');

//Minify CSS.
const css = () => {
	return gulp.src('./src/css/sobar.scss')
		.pipe(sass())
		.on('error', function(error) {
			//Log to the console.
			console.error(error);

			//Return the error.
			return error;
		})
		.pipe(rename('./sobar.min.css'))
		.pipe(minifyCSS({compatibility: 'ie9'}))
		.pipe(gulp.dest('./dist/css'));
};

//Minify images.
const images = () => {
	return gulp.src('./src/images/*.svg')
		.pipe(imagemin())
		.pipe(gulp.dest('./dist/images'));
};

const tasks = gulp.parallel(css, images);

exports.default = tasks;