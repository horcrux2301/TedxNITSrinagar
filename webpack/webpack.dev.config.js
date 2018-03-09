const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
	entry: './src/client/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.dist.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude : /node_modules/
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /\.(png|jpg|gif|svg|eot|woff|woff2|ttf|mp4)$/,
				use: [
					{
						loader: 'file-loader',
						options: {}  
					}
				]
			}
		]
	},
	node: {
		fs: 'empty'
	},
	devtool: 'inline-source-map',
	devServer: {
		inline: true,
		contentBase: './dist',
		port: '8081',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/public/index.html',
			filename: './index.html'
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
		
	]
};

module.exports = config;

