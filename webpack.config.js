// Work around for https://github.com/angular/angular-cli/issues/7200
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './lambda.ts',
    externals: [/(node_modules|main\..*\.js)/,],
    target: 'node',
    resolve: { extensions: ['.ts', '.tsx', '.js', '.webpack.js', '.web.js', '.mjs', '.js', '.json'] },
    optimization: {
        minimize: false
    },
    output: {
        libraryTarget: 'commonjs2',
        path: path.join(__dirname, 'webpack'),
        filename: 'lambda.js'
    },
    node: {
        __dirname: false
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                loader: "ts-loader",
                options: {
                    happyPackMode: true,
                    transpileOnly: true
                },
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new CopyPlugin([
            { from: 'build', to: '../build' },
        ]),
    ],
}