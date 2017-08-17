var config = {
    entry: './index.js',

    output:  {
        path: '/',
        filename: 'index.js'
    },

    devServer: {
        inline: true,
        port: 9000
    },

    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',

                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}

module.exports = config;