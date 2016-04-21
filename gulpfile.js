var gulp = require('gulp');
var webserver = require('gulp-webserver');
var sass = require('gulp-sass');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel')

var config ={
	sass:{
		main: './src/sass/main.scss',
		watch: './src/sass/**/*.scss',
		output: './build/css'
	},
	html:{
		watch: './build/*.html'
	},
	scripts:{
		main: './src/scripts/main.js',
		watch: './src/scripts/**/*.js',
		output: './build/js'
	},
	images: {
		watch: ['./build/img/*.png', './build/*.jpg', './build/*.svg'],
		output: './dist/img'
	}
}
gulp.task('server', function(){
	gulp.src('./build')
		.pipe(webserver({
			host: '0.0.0.0',
			port: 4040,
			livereload: {
				enable: true,
				port: 35728
			}
		}));
});

gulp.task('build:js', function() {
	return browserify(config.scripts.main)
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(babel())
		.pipe(gulp.dest(config.scripts.output));
});

gulp.task('build:css', function(){
	gulp.src(config.sass.main)
		.pipe(sass({
			outputStyle:'compressed'
		})
		.on('error', sass.logError))
		.pipe(gulp.dest(config.sass.output));
});

gulp.task('watch', function(){
	gulp.watch(config.scripts.watch, ['build:js']);
	gulp.watch(config.sass.watch, ['build:css']);
	gulp.watch(config.html.watch, ['build']);
});

gulp.task('build', ['build:css', 'build:js']);
gulp.task('default', ['server', 'watch', 'build']);
