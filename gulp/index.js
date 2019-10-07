var gulp       = require('gulp');
var plugins    = require('gulp-load-plugins')();
var config     = require('./config');

module.exports = function(tasks) {
    plugins.livereload.listen();
    tasks.forEach(function(name) {
        var match = name.indexOf(':');
        var fileName = name;
        var settings = {};

        if (match > -1) {
            fileName = name.substring(0, match);
        }

        settings.isWatching = name.indexOf('watch') > -1;
        settings.taskName = name;

        gulp.task(name, require('./tasks/' + fileName)(gulp, plugins, config, settings));
    });

    return gulp;
};
