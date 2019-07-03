const dirpath = require('./base/path');
const config = require('./base/config');

const webpack = require('webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');  //清除
const MiniCssExtractPlugin = require("mini-css-extract-plugin");  //css样式提取
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');    //生成html文件

const VueLoaderPlugin = require('vue-loader/lib/plugin')
const fs = require('fs');



let plugins = [
	new VueLoaderPlugin(),	
	new HtmlWebpackPlugin({
		favicon: dirpath.src+'/favicon.ico',
		filename:'index.html',   
		template: dirpath.src + '/index.html',
		inject:'body',    //插入的位置 ['head','body']
	}),
	new  MiniCssExtractPlugin({
		filename: config.NODE_ENV == 'development'?'[name.css]': `${dirpath.css}/[name].[hash].css`,
		chunkFilename: config.NODE_ENV == 'development'?'[id].css': `${dirpath.css}/[id].[hash].css`
	}),   //css提取
	new webpack.ProvidePlugin({
		_:'loadsh'
	}),
	new webpack.DefinePlugin({ 
		IS_PRODUCTION: config.NODE_ENV == 'development'?JSON.stringify(false):JSON.stringify(true),
	}),
	new CleanWebpackPlugin()
]

let files = fs.readdirSync(dirpath.dll)
files.forEach(val=>{
	if(/\.js$/.test(val)){
		plugins.push(new AddAssetHtmlPlugin({ 
			filepath: `${dirpath.dll}/${val}`
		}))		
	}

	if(/\.json$/.test(val)){
		plugins.push(new webpack.DllReferencePlugin({
			manifest: `${dirpath.dll}/${val}`
		}))
	}
})


if('development' == config.NODE_ENV){
	plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = plugins;


