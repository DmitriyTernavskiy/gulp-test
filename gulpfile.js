'use strict';

var tasksList = [
    'connect',
    'htmlbuild:watch',
    'styles:watch',
    'scripts:watch',
    'imagemin',
    'iconfont'
];

var defaultTasksList = [
    'connect',
    'htmlbuild:watch',
    'styles:watch',
    'scripts:watch'
];

var gulp = require('./gulp')(tasksList);

gulp.task('default', gulp.parallel(defaultTasksList));


// Run tasks:
//
// gulp imagemin (if needed)
// gulp iconfont
// gulp (watcher enabled by default)

// For live reload Chrome extension LiveReload required to install.
// Link - https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei
