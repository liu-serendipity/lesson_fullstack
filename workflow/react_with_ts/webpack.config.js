// html 模板指定
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const basePath = __dirname;

module.exports = {
    context: path.join(basePath, 'src'),
    resolve: {
        extensions: [".js", ".ts", ".tsx"],
        alias: {
            "@": path.resolve(__dirname, 'src'),
            "~": path.resolve(__dirname, 'src/assets')
        }
    },
    entry: {
        app: ["./main.tsx"]
    },
    output: {
        filename: "[name].[chunkhash].js"
    },
    mode: 'development',
    devServer: {
        hot: true,
        open: true,
        port: 8888
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "index.html"
        })
    ]
}