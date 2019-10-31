var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvar = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import');
gulp.task('default', function() {
    console.log("Hello,gulp task");

});


gulp.task('html', function() {
    console.log("Why is this useful????");

})

gulp.task('styles', function() {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([nested, cssImport, cssvar, autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));

})

gulp.task('watch', function() {
    watch('./app/index.html', function() {
        gulp.start('html')
    });

    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('styles');
    })
})