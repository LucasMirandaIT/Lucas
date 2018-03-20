var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
    "devServer": {
        host: 'local.isbanbr.dev.corp',
        port: 80
    }
});