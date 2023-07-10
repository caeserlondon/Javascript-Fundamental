const gulp = require('gulp');

//* TOP LEVEL FUNCTIONS
/*
gulp.task   - Defines tasks
gulp.src    - Point to file to use as a Asource
dulp.dest   - point to folder to output as Destination
gulp.watch  - Watch files and folder for changes
*/

// Logs message
gulp.task(`message`, function () {
	return console.log('Gulp is running...');
});

gulp.task(`default`, function () {
	return console.log('Gulp is running in default mode');
});

// Copy all HTML files
// prettier-ignore
gulp.task('copyHtml', function () {
	return gulp.src('src/*.html')
		.pipe(gulp.dest('dist'));
});
