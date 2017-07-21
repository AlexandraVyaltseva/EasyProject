const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "build.js"
    },
    plugins: [new HtmlWebpackPlugin({template:'src/index.html'})]
};