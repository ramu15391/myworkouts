var config = {
	entry: './main.js',
	output: {
		path:'/',
		filename: 'index.js',
	},
	devServer: {
		inline: false,
		port: 8080
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					plugins: ['transform-decorators-legacy','transform-class-properties' ],
					presets: ['es2015', 'react'],
				}
			}
		]
	}
}
module.exports = config;