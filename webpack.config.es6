import webpack from 'webpack';
import path from 'path';

export default {
    devtool: 'source-maps',
    noInfo: false,
    entry: [
        'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
        './client/index.jsx'
    ],
    target: 'web',
    output: {
        path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './client'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.es6', '.scss'],
        modulesDirectories: ['node_modules']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(process.env)
        })
    ],
    module: {
        loaders: [
            {test: /\.(js|jsx|es6)$/, include: path.join(__dirname, 'client'), loaders: ['babel']},
            {test: /(\.css)$/, loaders: ['style', 'css']},
            {test: /(\.scss)$/, loaders: ['style', 'css', 'sass']},
            {test: /\.json$/, loader: 'json-loader'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.(png|jpg)$/, loader: 'file'},
        ]
    }
};