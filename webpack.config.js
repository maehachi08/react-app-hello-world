var path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        app: "./src/index.js"
    },

    output: {
        path: path.join(__dirname, '/public/js'),
        filename: "[name].js"
    },

    devServer: {
        contentBase: path.join(__dirname, '/public'),
        port: 8080,
        publicPath: "/js/"
    },

    devtool: "#inline-source-map",

    module: {
        rules: [

            {
                test: /\.js$/,
                enforce: "pre",
                exclude: /node_modules/,
                loader: "eslint-loader"
            },

            {
                test: /\.css$/,
                loader: ["style-loader", "css-loader"]
            },

            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }

}
