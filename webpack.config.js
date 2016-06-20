var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
})
module.exports = {
    devtool: 'source-map',
    entry: ['./app/index.js'],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel"
        },
      ]
    },
    output: {
        path: __dirname + '/dist',
        filename: "index_bundle.js"
    },
    plugins: [HtmlWebpackPluginConfig]


}
