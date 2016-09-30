module.exports = {
    entry: "./public/scripts/app.js",
    output: {
        path: __dirname + '/public/build/',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ['style', 'css'] }
        ]
    }
};