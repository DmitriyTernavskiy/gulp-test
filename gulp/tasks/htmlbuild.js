module.exports = function (gulp, plugins, config, settings) {
    return function () {
        if (settings.isWatching) {
            gulp.watch(config.html.core.watch, gulp.series(settings.taskName));
        }

        return gulp.src(config.html.core.source) 
                .pipe(plugins.rigger()) 
                .pipe(gulp.dest(config.html.core.target))
                .pipe(plugins.livereload());
    };
};
