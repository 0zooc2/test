const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	//entry: './src/index.js',
	//entry: './src/practice.js',
	entry: './src/script.js',
	output: {
		filename: 'main.js',
		publicPath: '/',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader',
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env'],
							plugins: ['@babel/plugin-proposal-class-properties']
						},
					}
					
				],
			},
			{
				test: /\.(glb|gltf)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							//publicPath: 'src/map/model',
       						//sourceMap: true
						},
					}
					
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
		}),
	],
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'dist'),
		},
		allowedHosts: 'all',
		port: 80,
		historyApiFallback: true,
		headers: {"Access-Control-Allow-Origin": "*"},
	}
};
