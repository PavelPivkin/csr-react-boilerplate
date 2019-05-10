const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StyleLintPlugin = require("stylelint-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  devtool: "source-map",
  entry: "./src/index.tsx",
  devtool: devMode && 'inline-source-map',
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
        cache: true,
        parallel: true,
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  module: {
    rules: [{
      exclude: /node_modules/,
      test: /\.tsx?$/,
      use: ["ts-loader"],
    }, {
      enforce: "pre",
      test: /\.js$/,
      use: ["source-map-loader"],
    }, {
      exclude: /node_modules/,
      test: /\.(sa|sc|c)ss$/,
      use: [
        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {
            modules: true,
            importLoaders: 1,
            localIdentName: '[sha1:hash:hex:12]',
          }
        },
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
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
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
