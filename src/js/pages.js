const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = [
    new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html",
        inject: "body",
        title: "Dom Decor",
    }),
];