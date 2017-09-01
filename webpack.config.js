var config = {
    entry:'./caro/index.js',

    output:{
        path:'/',
        filename:'caro/index.js'
    },

    devServer:{
        inline:true,
        port:9000
    },

    module:{
        loaders:[
            {
                test:/\.js?$/,
                exclude:/node_modules/,
                loader:'babel-loader',

                query:{
                    presets:['es2015','react']
                }
            },
            {
                test:/\.css$/,
                loader:"style-loader!css-loader"
            }
        ]
    }
}

module.exports = config;