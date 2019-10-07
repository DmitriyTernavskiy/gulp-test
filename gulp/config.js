exports.styles = {
    core: {
        source: 'src/styles/**/*.scss',
        target: 'dist/css',
        options: {
            outputStyle: 'extended'
        }
    }
};

exports.scripts = {
    core: {
        source: 'src/scripts/app.js',
        target: 'dist/js',
        partials: 'src/scripts/partials/*.js',
        watchedFiles: 'src/scripts/*.js',
        outputFileName: 'bundle.js',
        options: {
            outputStyle: 'extended'
        }
    }
};

exports.html = {
    core: {
        source: 'src/*.html',
        target: 'dist/',
        watch: 'src/**/*.html'
    }
}

exports.images = {
    core: {
        source: 'src/images/*',
        target: 'dist/img'
    }
}

exports.icons = {
    core: {
        source: 'src/images/icons/*',
        target: 'dist/fonts',
        fontName: 'icons',
        iconsTemplatePath: './src/styles/_includes/iconfont/_iconfont.scss',
        iconsTargetPath: '../../src/styles/_includes/iconfont/_icons.scss',
        iconsFontPath: 'dist/fonts/icons'
    }
}
// iconsTargetPath - relative from target path

exports.global = {
    'target': './dist/'
}
