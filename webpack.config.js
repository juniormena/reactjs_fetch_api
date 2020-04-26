const Htmlwebpackplugin = require('html-webpack-plugin');
const dotenv = require('dotenv-webpack')
//copy html en el archivo babel
const htmlPlugin =  new Htmlwebpackplugin({
    template: './src/index.html',
    filename:'./index.html' 
})

module.exports = {
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:['babel-loader']
            },
            {
                test:/\.css$/,
                use:['style-loader', 'css-loader']
            }
        ]
    },
    plugins:[htmlPlugin,new dotenv()]
};