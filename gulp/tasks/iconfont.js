module.exports = function (gulp, plugins, config, settings) {
    return function () {
        return gulp.src([config.icons.core.source])
        .pipe(plugins.iconfontCss({
            fontName: config.icons.core.fontName,
            path: config.icons.core.iconsTemplatePath,
            targetPath: config.icons.core.iconsTargetPath,
            fontPath: config.icons.core.iconsFontPath,
            firstGlyph: 0xf120 // Codes for glyphs should be in area where are no icons by default on iOS and Android
        })).pipe(plugins.iconfont({
            fontName: config.icons.core.fontName,
            formats: ['svg', 'ttf', 'eot', 'woff', 'woff2'],
            normalize: true,
            prependUnicode: true,
            fontHeight: 1001,
            timestamp: Math.round(Date.now()/1000)
        }))
          .on('glyphs', function(glyphs, options) {
            // CSS templating, e.g.
            console.log(glyphs, options);
          })
        .pipe(gulp.dest(config.icons.core.target));
    };
};
