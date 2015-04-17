var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')({
	    pattern: ['gulp-*', 'gulp.*', '*']
	});

// build task
gulp.task('build', ['build-css', 'build-js', 'html-copy'])

// development task, rebuild on change
gulp.task('dev', ['build'], function() {
	gulp.watch('source/javascript/**/*.js', ['jshint', 'build-js']);
	gulp.watch('source/**/*.html', ['html-copy']);
	gulp.watch('source/stylesheets/*.less', ['build-css']);
});

// clean the public folder
gulp.task('clean', function() {
    plugins.del('public/**/*.*');
})

// test for javascript errors
gulp.task('jshint', function() {
	return gulp.src('source/javascript/**/*.js')
		.pipe(plugins.jshint())
		.pipe(plugins.jshint.reporter('jshint-stylish'));
});

// compile less files and concatenate css
gulp.task('build-css', function() {
    return gulp.src('source/stylesheets/**/*.less')
    	.pipe(plugins.less())
    	.pipe(plugins.sourcemaps.init())
    	.pipe(plugins.concat('styles.css'))
    	.pipe(plugins.sourcemaps.write())
    	.pipe(gulp.dest('public/assets/stylesheets'));
});

// concatenates and uglifies javascript (todo)
gulp.task('build-js', function() {
    return gulp.src('source/javascript/**/*.js')
    	.pipe(gulp.dest('public/assets/javascript'));
});

// copy html into public build
gulp.task('html-copy', function() {
    gulp.src('source/**/*.html').pipe(gulp.dest('public'));
})

/* ### Documentation ###
------- Gulp Top Level Elements ------- 
*gulp.task defines your tasks. Its arguments are name, deps and fn.
*gulp.src points to the files we want to use. It’s parameters are globs 
 and an optional options object. It uses .pipe for chaining it’s output 
 into other plugins.
*gulp.dest points to the output folder we want to write files to.
*gulp.watch like gulp.task has two main forms. Both of which return an 
 EventEmitter that emits change events. 

------- Gulp Task Types ------- 
gulp.task('mytask', function() {
  //do stuff
});

gulp.task('dependenttask', ['mytask'], function() {
  //do stuff after 'mytask' is done.
}); 

------- Gulp.src and Gulp.dest example -------
gulp.task('copyHtml', function() {
  // copy any html files in source/ to public/
  gulp.src('source/*.html').pipe(gulp.dest('public'));
});

------- Gulp.watch example -------
gulp.watch('source/javascript/** /*.js', ['jshint']);
// when any of the files matched by the glob change, run the tasks
*/