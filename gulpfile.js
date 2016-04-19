var gulp = require('gulp');
var webserver = require('gulp-webserver');
var sass = require('gulp-sass');

var config ={
	sass:{
		main: './src/sass/main.scss',
		watch: './src/sass/**/*.scss',
		output: './build/css'
	},
	html:{
		watch: './build/*.html'
	}
}
gulp.task('server', function(){
	gulp.src('./build')
		.pipe(webserver({
			host: '0.0.0.0',
			port: 8080,
			livereload: {
				enable: true,
				port: 35728
			}

		}));
});

gulp.task('build:css', function(){
	gulp.src(config.sass.main)
		.pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
		.pipe(gulp.dest(config.sass.output));
});

gulp.task('watch', function(){
	gulp.watch(config.sass.watch, ['build:css']);
	gulp.watch(config.html.watch, ['build']);
	});

gulp.task('build', ['build:css']);
gulp.task('default', ['server', 'watch', 'build']);
