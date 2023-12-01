const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const EsLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    devtool: "source-map",
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.html'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_module/,
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }, {
                test: /\.svg$/,
                use: [
                    { loader: "svg-url-loader" }
                ]
            },
            {
                test: /\.(woff|woff2)$/,
                use: "null-loader",
            }
        ],
    },
    output: {
        path: path.resolve(__dirname, '..', './build'),
        filename: 'bundle.js?v=[contenthash]',
        chunkFilename: "bundel.chunk.js?v=[contenthash]",
    },
    devServer: {
        static: "./build",
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({ filename: "[name].[hash].css" }),
        new EsLintPlugin({
            extensions: ["ts", "tsx"],
            exclude: ["node_modules", "build"],
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
}