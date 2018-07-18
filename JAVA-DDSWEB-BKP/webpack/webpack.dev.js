var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
    // plugins: [
    //     new SourceMapDevToolPlugin({
    //       "filename": "[file].map[query]",
    //       "moduleFilenameTemplate": "[resource-path]",
    //       "fallbackModuleFilenameTemplate": "[resource-path]?[hash]",
    //       "sourceRoot": "webpack:///"
    //     }),
    // ]
    "devServer": {
        host: 'local.isbanbr.dev.corp',
        port: 80
    }
});

// host: 'dds.paas.isbanbr.dev.corp',
// host: 'local.isbanbr.dev.corp',