const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        'nodecg-rx': './src/index.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist', 'bundles'),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'nodecg-rx',
        umdNamedDefine: true
    },
    devtool: 'source-map',
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ },
        ]
    }
};