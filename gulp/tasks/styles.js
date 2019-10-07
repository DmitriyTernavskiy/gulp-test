module.exports = function (gulp, plugins, config, settings) {
    return function () {
        if (settings.isWatching) {
            gulp.watch(config.styles.core.source, gulp.series(settings.taskName));
        }

        return gulp.src(config.styles.core.source)
                .pipe(plugins.sourcemaps.init())
                .pipe(plugins.sass(config.styles.core.options).on('error', plugins.sass.logError))
                .pipe(plugins.sourcemaps.write('.'))
                .pipe(gulp.dest(config.styles.core.target))
                .pipe(plugins.livereload());
    };
};
