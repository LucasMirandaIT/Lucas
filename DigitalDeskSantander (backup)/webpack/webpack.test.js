const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const postcssPlugins = require('./plugins/postCss');
const { ContextReplacementPlugin } = require('webpack');

module.exports = {
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        rules: [{
            "test": /\.html$/,
            "loader": "raw-loader"
        },
        {
             enforce: 'post',
             test: /\.ts$/,
             use: { loader: 'istanbul-instrumenter-loader' },
	
             exclude: /(node_modules|.spec\.ts$)/
         },
        {
            test: /\.ts$/,
            loader: 'awesome-typescript-loader',
            options: {
                configFileName: './src/tsconfig.spec.json'
            }
        },
        {
            test: /\.ts$/,
            use: ['angular2-template-loader']
        },
        {
            "exclude": [
                path.join(process.cwd(), "src\\styles.css")
            ],
            "test": /\.scss$|\.sass$/,
            "use": [
                "exports-loader?module.exports.toString()",
                {
                    "loader": "css-loader",
                    "options": {
                        "sourceMap": false,
                        "importLoaders": 1
                    }
                },
                {
                    "loader": "postcss-loader",
                    "options": {
                        "ident": "postcss",
                        "plugins": postcssPlugins
                    }
                },
                {
                    "loader": "sass-loader",
                    "options": {
                        "sourceMap": false,
                        "precision": 8,
                        "includePaths": []
                    }
                }
            ]
        }
        ]
    },
    plugins: [
        new ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)@angular/, './src', {}),
        new CopyWebpackPlugin([{
            from: "./app/*/static/**/*",
            to: "./"
        }]),
        new webpack.SourceMapDevToolPlugin({
            filename: null,
            test: /\.(ts|js)($|\?)/i
        })
    ]
};