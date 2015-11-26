//Declare variables.
var	gulp		=	require('gulp');
var imagemin    =   require('gulp-imagemin');
var	minifyCSS	=	require('gulp-minify-css');
var	rename		=	require('gulp-rename');
var	svgsprite	=	require('gulp-svg-sprite');

//Declare settings.
var	settings	=	{
		'imagemin': {
			interlaced: true, 
			multipass: true, 
			optimizationLevel: 5, 
			progressive: true, 
			svgoPlugins: [{removeViewBox: false}]
		}, 
		'svgsprite': {
			dest: '.', 
			log: null, 
			mode: {
				view: true
			}, 
			svg: {
				xmlDeclaration: true, 
				doctypeDeclaration: true, 
				namespaceIDs: true, 
				dimensionAttributes: true
			}
		}
};

//Minify CSS.
gulp.task('css', function() {
	return gulp.src('./css/sobar.css')
		.pipe(rename('./sobar.min.css'))
		.pipe(minifyCSS({compatibility: 'ie9'}))
		.pipe(gulp.dest('./css'));
});

//Minify images.
gulp.task('minify', function() {
	return gulp.src('./images/src/*.svg')
		.pipe(imagemin(settings.imagemin))
		.pipe(gulp.dest('./images'));
});

//Handle images.
gulp.task('sprite', function() {
	return gulp.src('./images/*.svg')
		.pipe(svgsprite(settings.svgsprite))
		.pipe(gulp.dest('.'));
});

//Task runner. 
gulp.task('default', ['css', 'minify']);