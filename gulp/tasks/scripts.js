

module.exports = function (gulp, plugins, config, settings) {
    var browserify = require('browserify');
    var source = require('vinyl-source-stream');

    return function () {
        if (settings.isWatching) {
            gulp.watch(config.scripts.core.watchedFiles, gulp.series(settings.taskName));
        }

        return browserify(config.scripts.core.source)
                    .bundle()
                    .pipe(source(config.scripts.core.outputFileName))
                    .pipe(gulp.dest(config.scripts.core.target))
                    .pipe(plugins.livereload());
    };
};

// Rollup

// var rollup = require('rollup-stream');
// var buffer = require('vinyl-buffer');
// return rollup({entry: config.scripts.core.source, format: 'iife' })
//     .pipe(source(config.scripts.core.outputFileName))
//     .pipe(buffer())
//     .pipe(babel())
//     .pipe(gulp.dest(config.scripts.core.target));

// Concat

// return gulp.src(config.scripts.core.partials)
//         .pipe(plugins.concat('app.js'))
//         .pipe(gulp.dest(config.scripts.core.target));

// Babel

// var babel = require('gulp-babel');
// return gulp.src(config.scripts.core.source)
// .pipe(babel( {presets: ["es2015"]} ))
// .pipe(gulp.dest(config.scripts.core.target));