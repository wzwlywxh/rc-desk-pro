const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

function webpackCommonConfigCreator(options){
  return {
    mode: options.mode,
    devtool: options.mode === 'development' ? 'source-map' : 'cheap-module-source-map',
    entry: path.resolve("./src/index.js"),
    output: {
      filename: "js/bundle.js",
      path: path.resolve(__dirname, "../build"),
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts)$/,
          include: path.resolve(__dirname, "../src"),
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-react'],
                plugins: [
                  ["react-hot-loader/babel"],
                  ["import", {
                    "libraryName": "antd",
                    "libraryDirectory": "es",
                    "style": "less"
                  }]
                ]
              }
            },
          ]
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.lss$/,
          use: [
            "style-loader",
            "css-loader",
            {
              loader: path.resolve(__dirname, '../loaders/lss.js'),
              options: require('./theme.config')
            }
          ],
        },
        {
          test: /\.less$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              "css-loader",
              {
                loader: "less-loader",
                options: {
                  modifyVars: {
                    // 'hack': `true; @import "../../../src/index.less";`, // Override with less file
                  },
                  javascriptEnabled: true,
                }
              }
            ]
          })
          // use: ["style-loader", "css-loader", "less-loader"]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ['file-loader']
        },
        {
          test: /\.(jpg|png|svg|gif)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10240,
              name: 'images/[hash].[ext]',
            }
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "../public/index.html")
      }),
      new webpack.HotModuleReplacementPlugin(),
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [path.resolve(process.cwd(), "build/"), path.resolve(process.cwd(), "dist/")]
      }),
      new ExtractTextPlugin({
        filename: "css/[name].[hash].css"
      }),
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, '../public/json'),
          to: 'public/json',
          ignore: ['.*']
        }
      ])
    ]
  }
}

module.exports = webpackCommonConfigCreator
