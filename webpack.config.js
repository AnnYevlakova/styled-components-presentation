module.exports = {
    entry: [
        './src/index.js',
    ],
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
        ],
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: ['babel-loader'],
                query:
                    {
                        presets: ['react'],
                    },
            }
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    devServer: {
        contentBase: './'
    },
};