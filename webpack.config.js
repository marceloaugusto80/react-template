require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackExternalsPlugin = require("html-webpack-externals-plugin");



function getConfig(isDev = true) {

    return {

        // build mode 
        mode: isDev ? "development" : "production",


        // Enable sourcemaps for debugging webpack's output.
        devtool: isDev ? "inline-source-map" : "node",


        // the entry point of the application. where your app start executing.
        entry: {
            "main": "./src/styles/main.scss",
            "polyfill": "@babel/polyfill",
            "app": "./src/app.tsx"
        },


        // the compilation/bundling output
        output: {
            filename: isDev ? "[name].js" : "[name].[hash].js",
            path: __dirname + "/dist",
            publicPath: "/"
        },


        resolve: {
            // Add '.ts' and '.tsx' as resolvable extensions.
            extensions: [".ts", ".tsx", ".js", ".json"]
        },


        module: {
            rules: [

                // transpiling for older browsers
                {
                    test: /\.tsx?$/, loader: "babel-loader", exclude: /node_modules/,
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

                // compile sass
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        { loader: MiniCssExtractPlugin.loader },
                        "css-loader",
                        "sass-loader"
                    ]
                },

                // bundle css file references
                {
                    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader",
                    options: { name: "[name].[ext]", outputPath: "fonts/" }
                },

                // bundle image files
                {
                    test: /\.(jpg|png)$/, use: {
                        loader: "file-loader",
                        options: { name: "[name].[hash].[ext]", outputPath: "images/" }
                    }
                },

            ]
        },

        externals: {
            "react": "React",
            "react-dom": "ReactDOM",
            "react-router-dom": "ReactRouterDOM",
        },

        plugins: [

            // delete everything from dist folder before build
            new CleanWebpackPlugin(),

            new MiniCssExtractPlugin({
                filename: isDev ? "[name].css" : '[name].[hash].css'
            }),

            // auto generates index.html
            new HtmlWebpackPlugin({
                title: "React Template",
                hash: true,
                favicon: "src/favicon.ico",
                template: "src/index.html"
            }),


            // include external libraries to html. externals are used in code but excluded from build
            new HtmlWebpackExternalsPlugin({
                externals: [
                    {
                        module: "react",
                        global: "React",
                        entry: isDev ? "umd/react.development.js" : "umd/react.production.min.js"
                    },
                    {
                        module: "react-dom",
                        global: "ReactDOM",
                        entry: isDev ? "umd/react-dom.development.js" : "umd/react-dom.production.min.js"
                    },
                    {
                        module: "react-router-dom",
                        global: "ReactRouterDOM",
                        entry: isDev ? "umd/react-router-dom.js" : "umd/react-router-dom.min.js"
                    },
                ]
            })

        ],


        devServer: isDev ?
            {
                contentBase: path.join(__dirname, "dist"),
                port: 9000
            } :
            undefined

    };
}



module.exports = function (env) {
    const isDev = !!env.DEVELOPMENT;

    console.log(
        "\n##\n## Selected environment: " +
        (isDev ? "DEVELOPMENT" : "PRODUCTION") +
        "\n##\n")

    return getConfig(isDev);
}