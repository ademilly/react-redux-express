var path = require('path');

module.exports = {
    entry: './app/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, "app")
                ],
                loader: "babel-loader",
                options: {
                    presets: ["react", "es2015"]
                }
            }
        ]
    }
};
