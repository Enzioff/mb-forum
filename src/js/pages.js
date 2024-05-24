const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = [
    new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html",
        inject: "body",
        title: "Море бизнеса",
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/policy.html",
        filename: "policy.html",
        inject: "body",
        title: "Море бизнеса | Политика конфиденциальности",
    }),
];