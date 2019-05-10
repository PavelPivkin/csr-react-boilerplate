const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const StyleLintPlugin = require("stylelint-webpack-plugin");

module.exports = {
    devtool: "source-map",
    entry: "./src/index.tsx",
    devtool: 'inline-source-map',
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.tsx?$/,
            use: ["ts-loader"],
        }, {
            exclude: /node_modules/,
            test: /\.(sa|sc|c)ss$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader",
            ],
        }],
    },
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new StyleLintPlugin({
            configFile: "./.stylelintrc",
            failOnError: false,
            syntax: "sass",
        }),
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
        modules: ["node_modules"],
    },
};
