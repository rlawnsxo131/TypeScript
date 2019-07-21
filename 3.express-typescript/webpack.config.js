const path = require('path');
const { NODE_ENV = 'production' } = process.env;

module.exports = {
    entry: './src/index.ts',
    mode: NODE_ENV,
    target: 'node',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    resolve: {
      extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            { 
                test: /\.(ts)$/,
                use:['ts-loader'],
                exclude:/node_modules/
            }
        ]
    }
};
  