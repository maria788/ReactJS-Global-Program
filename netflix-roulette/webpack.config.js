const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackNotifierPlugin = require("webpack-notifier");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (env, argv) => {
  const modeEnv = argv.mode || "development";
  const isProd = modeEnv === "production";

  let optimizations = {};

  if (isProd) {
    optimizations = {
      splitChunks: {
        cacheGroups: {
          vendors: {
            name: "vendors",
            test: /node_modules/,
            chunks: "all",
            enforce: true,
          },
        },
      },
      minimizer: [new UglifyJsPlugin()],
      moduleIds: "deterministic",
      runtimeChunk: "single",
    };
  }

  return {
    devServer: {
      static: { directory: path.join(__dirname, "dist") },
      compress: true,
      port: 4200,
      hot: true,
      open: true,
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "index.html",
      }),
      new WebpackNotifierPlugin({ alwaysNotify: false }),
      new CopyPlugin({
        patterns: [{ from: "src/assets", to: "assets" }],
      }),
    ],
    entry: {
      main: "./src/index.tsx",
    },
    output: {
      filename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "dist"),
      publicPath: "/",
    },
    performance: {
      hints: false,
    },
    optimization: optimizations,
    devtool: "eval-source-map",
  };
};
