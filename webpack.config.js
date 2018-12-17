require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackExternalsPlugin = require("html-webpack-externals-plugin");



module.exports = {
    
    // the entry point of the application. where your app start executing.
    entry: "./src/app.tsx",

    // the compilation/bundling output
    output: {
        filename: "app.js",
        path: __dirname + "/dist",
        publicPath: "/"
    },

    // current environment. change to "production" before deploying
    mode: "development",

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    devServer: {
        historyApiFallback: true
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            
            // transpiling for older browsers
            { test: /\.tsx?$/, loader: 'babel-loader', options: { presets: ["@babel/preset-env"] } },

            // transpiling typescript
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // maintain source maps continuity
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            
            // bundle css references
            { test: /\.css$/, use: ["style-loader", "css-loader"] },

            // bundle css file references
            { 
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader', 
                options: { name: '[name].[ext]', outputPath: 'fonts/' }
            },

            // bundle image files
            { test: /\.(jpg|png)$/, use: { loader: "file-loader", options: { name: "[path][name].[hash].[ext]", } } },
            
        ]
    },

    plugins: [

        // auto generates index.html
        new HtmlWebpackPlugin({ title: "React Template", hash: true, favicon: "src/favicon.ico", template: "src/index.html" }),
        
        // include exernals to index.html
        new HtmlWebpackExternalsPlugin({
            externals: [
                { module: "react", global: "React", entry: "umd/react.development.js" },
                { module: "react-dom", global: "ReactDOM", entry: "umd/react-dom.development.js" },
            ]
        })
        
    ]

};