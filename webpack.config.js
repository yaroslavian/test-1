const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
   template: './src/index.html',
   filename: './index.html'
});

module.exports = {
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader'
            }
         },
         {
            test: /\.styl$/,
            use: [
               { loader: 'style-loader' },
               { loader: 'css-loader' },
               { loader: 'stylus-loader' }
            ]
         }
      ]
   },
   plugins: [htmlPlugin]
};