const path = require('path');

module.exports = {
    entry: './src/labirint/labirint.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    target: "node",
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'window'
    }
};