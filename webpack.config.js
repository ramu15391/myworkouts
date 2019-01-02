var config = {
	entry: './main.js',
	output: {
		path:'/',
		filename: 'index.js',
	},
	devServer: {
		inline: false,
		port: 7777
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
			},
			{
				test: /\.css$/,
        		//use: ['style-loader', 'css-loader'],
				loader: require.resolve('css-loader'),
				options: {
				  importLoaders: 1,
				  modules: true,
				  localIdentName: "[name]__[local]___[hash:base64:5]"  
				},
			}
		]
	}
}
module.exports = config;