const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const head = fs.readFileSync("src/includes/head.html");
const sectionHeader = fs.readFileSync("src/includes/sectionHeader.html");
const sectionFooter = fs.readFileSync("src/includes/sectionFooter.html");
const pageHeader = fs.readFileSync("src/includes/pageHeader.html");
const hidden = fs.readFileSync("src/includes/hidden.html");

module.exports = [
    new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html",
        inject: "body",
        title: "Море бизнеса",
        head,
        sectionHeader,
        sectionFooter,
        hidden
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/policy.html",
        filename: "policy.html",
        inject: "body",
        title: "Море бизнеса | Политика конфиденциальности",
        head,
        pageHeader,
        sectionFooter,
        hidden
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/program.html",
        filename: "program.html",
        inject: "body",
        title: "Море бизнеса | Программа форума",
        head,
        pageHeader,
        sectionFooter,
        hidden
    }),
];