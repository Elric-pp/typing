var path = require('path')
var webpack = require('webpack')
var postcss_nested = require('postcss-nested')
var postcss_advanced_variables = require('postcss-advanced-variables')
var postcss_extend = require('postcss-extend')

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            exclude: /node_modules/,
            include: __dirname
        },
        {
          test: /\.json$/,
          loaders: [ 'json' ],
        },
        {
          test: /\.css$/,
          loaders: [ "style", "css" , "postcss"],
        }]
    },
    postcss: function () {
        return [postcss_nested, postcss_advanced_variables, postcss_extend]
    }
}


var reduxSrc = path.join(__dirname, '..', '..', 'src')
var reduxNodeModules = path.join(__dirname, '..', '..', 'node_modules')
var fs = require('fs')
if (fs.existsSync(reduxSrc) && fs.existsSync(reduxNodeModules)) {
    module.exports.resolve = { alias : {'redux' : reduxSrc}}
    module.exports.module.loaders.push({
        test: /\.js$/,
        loaders: ['babel'],
        include:  reduxSrc
    })
};










