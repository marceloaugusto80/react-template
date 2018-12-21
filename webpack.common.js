require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    
    // the entry point of the application. where your app start executing.
    entry: ["@babel/polyfill", "./src/app.tsx"],

    // the compilation/bundling output
    output: {
        filename: "app.js",
        path: __dirname + "/dist",
        publicPath: "/"
    },

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
            { test: /\.tsx?$/, loader: "babel-loader", exclude: /node_modules/, 
                options: { 
                    "presets": [
                        "@babel/preset-react", 
                        ["@babel/preset-env", 
                        {
                            "targets": {
                                "chrome": "58", 
                                "ie": "11"
                            }
                        }] 
                    ]
                } 
            },

            // transpiling typescript
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // maintain source maps continuity
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            
            // bundle css references
            { test: /\.css$/, use: [ 
                { loader: MiniCssExtractPlugin.loader }, 
                "css-loader"
                ]
            },

            // bundle css file references
            { 
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader", 
                options: { name: "[name].[ext]", outputPath: "fonts/" }
            },

            // bundle image files
            { 
                test: /\.(jpg|png)$/, use: { loader: "file-loader", 
                options: { name: "[name].[hash].[ext]", outputPath: "images/" } } 
            },
            
        ]
    },

    plugins: [

        // delete everything from dist folder before build
        new CleanWebpackPlugin(["dist"]),

        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css',
        }),

        // auto generates index.html
        new HtmlWebpackPlugin({ title: "React Template", hash: true, favicon: "src/favicon.ico", template: "src/index.html" }),
        
        

    ]

};