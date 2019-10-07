module.exports = function (gulp, plugins, config) {
    return function () {
        return  plugins.connect.server({
                    root: config.global.target,
                    port: 8888
                });
    };
};
