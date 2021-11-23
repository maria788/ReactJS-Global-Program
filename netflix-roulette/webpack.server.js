const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './server/index.js',

    target: 'node',

    externals: [nodeExternals()],

    output: {
        path: path.resolve('server-build'),
        filename: 'index.js'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        alias: {
            "@utils": path.resolve(__dirname, "src/utils"),
            "@ui": path.resolve(__dirname, "src/ui"),
            "@store": path.resolve(__dirname, "src/store"),
            "@hooks": path.resolve(__dirname, "src/hooks"),
        },
    },
    module: {
        rules: [
            {
                test: /\.js$|jsx|ts$|.tsx/,
                use: 'babel-loader'
            },{
                test: /\.css$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
                // use: ['style-loader', 'css-loader']
            }
        ]
    }
};