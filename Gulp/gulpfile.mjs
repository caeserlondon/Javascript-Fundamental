import gulp from 'gulp';
import concat from 'gulp-concat';
import imagemin from 'gulp-imagemin';
import uglify from 'gulp-uglify';
import sass from 'sass';

//* TOP LEVEL FUNCTIONS
/*
gulp.task   - Defines tasks
gulp.src    - Point to file to use as a Asource
dulp.dest   - point to folder to output as Destination
gulp.watch  - Watch files and folder for changes
*/

// Logs message
gulp.task('message', function (done) {
	console.log('Gulp is running...');
	done();
});

// Copy all HTML files
// prettier-ignore
gulp.task('copyHtml', function (done) {
		gulp.src('src/*.html')
			.pipe(gulp.dest('dist'))
	done();
	});

// Optimize Images
// prettier-ignore
gulp.task('imageMin', function (done) {		
	gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'));
	done();
})

// Minify JS
// prettier-ignore
gulp.task('minify', function (done) {
	gulp
		.src('src/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
	done();
})

// compile SASS
// prettier-ignore
// gulp.task('sass', function (done) {
// 	gulp
// 		.src('src/sass/*.scss')
// 		.pipe(sass().on('error', sass.logError))
// 		.pipe(gulp.dest('dist/css'));
// 	done();
// });

// Scripts
// gulp.task('scripts', function (done) {
// 	gulp
// 		.src('src/js/*.js')
// 		.pipe(concat('main.js'))
// 		.pipe(uglify())
// 		.pipe(gulp.dest('dist/js'));
// 	done()
// })
function scripts() {
	return gulp
		.src('src/js/*.js')
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
}

gulp.task('scripts', scripts);

// Watch
gulp.task('watch', function () {
	gulp.watch('src/js/*.js', gulp.series('scripts'));
	gulp.watch('src/images/*', gulp.series('imageMin'));
	gulp.watch('src/*.html', gulp.series('copyHtml'));
});

gulp.task('all', gulp.parallel('message', 'copyHtml'));

// gulp.task('all', ['message', 'copyHtml', 'imagmin', 'minify']);
