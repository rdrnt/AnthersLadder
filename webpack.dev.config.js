const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");
const { spawn } = require("child_process");

// Config directories
const SRC_DIR = path.resolve(__dirname, "src");
const OUTPUT_DIR = path.resolve(__dirname, "dist");

// Any directories you will be adding code/files into, need to be added to this array so webpack will pick them up
const defaultInclude = [SRC_DIR];

module.exports = {
  entry: [
    "react-hot-loader/patch", // activate HMR for React
    SRC_DIR + "/index.js", // main entry point for app
    SRC_DIR + "/sass/main.scss"
  ],
  output: {
    path: OUTPUT_DIR,
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        include: [path.join(SRC_DIR, "sass")],
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                importLoaders: 2 // will import previous amount of loaders
              }
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: [
                  autoprefixer({
                    support: [
                      "last 1 version",
                      "ie >= 11",
                      "safari >= 9",
                      "ios >= 9",
                      "android >= 4.4"
                    ]
                  })
                ]
              }
            },
            {
              loader: "sass-loader"
            }
          ]
        })
      },
      {
        test: /\.(js|jsx)$/,
        use: [{ loader: "babel-loader", options: { forceEnv: "development" } }],
        include: defaultInclude
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [{ loader: "file-loader?name=img/[name]__[hash:base64:5].[ext]" }],
        include: defaultInclude
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          { loader: "file-loader?name=font/[name]__[hash:base64:5].[ext]" }
        ],
        include: defaultInclude
      }
    ]
  },
  target: "electron-renderer",
  plugins: [
    new HtmlWebpackPlugin(),
    new ExtractTextPlugin({
      filename: "dist/[name].bundle.css",
      allChunks: true,
      disable: process.env.NODE_ENV !== "production"
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    }),
    new webpack.NamedModulesPlugin()
  ],
  devtool: "cheap-source-map",
  devServer: {
    contentBase: OUTPUT_DIR,
    stats: {
      colors: true,
      chunks: false,
      children: false
    },
    setup() {
      spawn("electron", ["."], {
        shell: true,
        env: process.env,
        stdio: "inherit"
      })
        .on("close", code => process.exit(0))
        .on("error", spawnError => console.error(spawnError));
    }
  }
};
