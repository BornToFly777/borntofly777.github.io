'use strict';

module.exports = {
    entry: './SRC/scripts.ts',

    output: {
        path: './DIST',
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },

    devtool: 'source-map', 

    module: {
    	loaders: [
            {
        		test: /\.tsx?$/,
        		loader: 'ts-loader'
      		}
        ],

        preLoaders: [
            { 
                test: /\.js$/, 
                loader: "source-map-loader" 
            }
        ]
    }
};