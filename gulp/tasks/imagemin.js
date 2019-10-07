module.exports = function (gulp, plugins, config, settings) {
    return function () {
        return gulp.src(config.images.core.source)
                .pipe(plugins.imagemin())
                .pipe(gulp.dest(config.images.core.target))
    };
};
