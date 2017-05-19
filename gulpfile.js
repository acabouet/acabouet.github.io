/**
 * Created by adrienne.cabouet on 5/11/17.
 */

<!--  :::::::::::::::::: require - gulp proper ::::::::::::::::::  -->
var gulp = require('gulp');

<!--  :::::::::::::::::: require - gulp-sass plugin ::::::::::::::::::  -->
var sass = require('gulp-sass');

<!--  :::::::::::::::::: require - browser sync (reload browser on file changes) ::::::::::::::::::  -->
var browserSync = require('browser-sync').create();

<!--  :::::::::::::::::: require - useref to concatenate CSS & JS files ::::::::::::::::::  -->
var useref = require('gulp-useref');

<!--  :::::::::::::::::: require - cssnano and uglify to minify css & js, if for gulp conditionals ::::::::::::::::::  -->
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');

<!--  :::::::::::::::::: require - imagemin for image optimization ::::::::::::::::::  -->
var imagemin = require('gulp-imagemin');

<!--  :::::::::::::::::: require - gulp-cache for caching ::::::::::::::::::  -->
var cache = require('gulp-cache');

<!--  :::::::::::::::::: require - del to clean up dist folder so we're not keeping around useless files ::::::::::::::::::  -->
var del = require('del');

<!--  :::::::::::::::::: require - runSequence ::::::::::::::::::  -->
var runSequence = require('run-sequence');


gulp.task('clean:dist', function() {
    return del.sync('dist');
});

<!--  :::::::::::::::::: task - initiate browserSync to reload browser on file changes ::::::::::::::::::  -->
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: ''
        }
    })
});

<!--  :::::::::::::::::: task - prints 'Gulp is working' to the console. ::::::::::::::::::  -->
gulp.task('test', function() {
    console.log('Gulp is working!');
});

<!--  :::::::::::::::::: task - compile sass ::::::::::::::::::  -->
gulp.task('sass', function(){
    return gulp.src('css/scss/**/*.scss')
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

<!--  :::::::::::::::::: task - concatenate CSS & JSS ::::::::::::::::::  -->
gulp.task('useref', function(){
    return gulp.src('*.html')
        .pipe(useref())
        // Minifies only if it's a JavaScript file
        .pipe(gulpIf('*.js', uglify()))
        // Minifies only if it's a CSS file
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('dist'))
});

<!--  :::::::::::::::::: task -  optimize images ::::::::::::::::::  -->
gulp.task('images', function(){
    return gulp.src('img/raw/**/*.+(png|jpg|gif|svg)')
    // Caching images that ran through imagemin
        .pipe(cache(imagemin({
            interlaced: true
        })))
        .pipe(gulp.dest('img'))
});

<!--  :::::::::::::::::: task - compile sass & watch for changes ::::::::::::::::::  -->
gulp.task('default', function (callback) {
    runSequence(['sass','browserSync', 'watch'],
        callback
    )
});

<!--  :::::::::::::::::: task -  concatenate & minify JS and CSS, optimize images ::::::::::::::::::  -->
gulp.task('build', function (callback) {
    runSequence('clean:dist',
        ['sass', 'useref', 'images'],
        callback
    )
});

<!--  :::::::::::::::::: task - watch for file changes ::::::::::::::::::  -->
gulp.task('watch', ['browserSync', 'sass'], function(){
    //Reloads the browser whenever sass changes
    gulp.watch('css/scss/**/*.scss', ['sass']);

    // Reloads the browser whenever HTML or JS files change
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('js/**/*.js', browserSync.reload);
});


