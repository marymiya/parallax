var gulp = require('gulp'),
    connect = require('gulp-connect'),
    rename = require('gulp-rename'),
    runSequence = require('run-sequence'),
    postcss = require('gulp-postcss'),
    cssimport = require('postcss-import'),
    cssnext = require('postcss-cssnext'),
    csscolorfunctions = require('postcss-color-function'),
    cssmqpacker = require('css-mqpacker'),
    cssnano = require('cssnano'),
    svgsprite = require('gulp-svg-sprites');
    cssmixins = require('postcss-mixins');

var browsersList = 'last 5 versions',
    pageName = process.argv[4],
    currentPage,
    currentPath;

if ( pageName != undefined ) {
    currentPage = pageName;
    currentPath = pageName + '/' + pageName;
} else {
    currentPage = '*';
    currentPath = '**/*';
}

// Server
gulp.task('connect', function () {

    connect.server({
        root: 'layout',
        livereload: true
    });
});

// Reload
gulp.task('reload', function () {

    gulp.src('./layout/' + currentPage + '.html')
        .pipe(connect.reload());
});

// CSS
gulp.task('css', function () {

    return gulp.src('./layout/_pages/' + currentPath + '.css')
        .pipe(postcss([
            cssimport(),
            cssnext({
                browsers: browsersList
            }),
            csscolorfunctions(),
            cssmqpacker(),
            cssmixins(),
            cssnano({
                autoprefixer: false,
                zindex: false
            })
        ]))
        .pipe(rename({
            dirname: '',
            suffix: '.min'
        }))
        .pipe(gulp.dest('./layout/styles'));
});

// SVG sprite
gulp.task('svgsprite', function () {

    return gulp.src('./layout/images/svg-sprite/icons/*.svg')
        .pipe(svgsprite({
            preview: false,
            mode: "symbols"
        }))
        .pipe(rename({
            dirname: '',
            basename: 'svg-sprite',
            extname: ".svg"
        }))
        .pipe(gulp.dest('./layout/images/svg-sprite'));
});

// Build
gulp.task('build', ['css'], function () {});

// Flow 1
gulp.task('flow-1', function () {

    runSequence('css', 'reload');
});

gulp.task('default', ['connect'], function () {

     gulp.watch([
        './layout/_blocks/**/*.css',
        './layout/_pages/' + currentPath + '.css',
        './layout/*.html'
    ], ['flow-1']);
});
