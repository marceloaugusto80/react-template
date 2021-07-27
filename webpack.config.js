const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackExternalsPlugin = require("html-webpack-externals-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


function getConfig(isDev) {

    const babelConfig = {
        presets: [
            ["@babel/preset-env", { targets: "> 0.25%, not dead" }],
            "@babel/preset-react",
            "@babel/preset-typescript"
        ],
        plugins: [
            "@babel/plugin-proposal-class-properties",
            "@babel/plugin-transform-runtime",
            isDev && require.resolve("react-refresh/babel") // necessary to hot reloading
        ].filter(Boolean)
    };

    return {

        // build mode 
        mode: isDev ? "development" : "production",

        // the runtime environment that will run your code
        target: "web",

        // Enable sourcemaps for debugging webpack's output.
        devtool: isDev ? "inline-source-map" : undefined,

        // the entry point of the application
        entry: { "app": "./src/app.tsx" },

        // the bundle output
        output: {
            filename: "[name].[chunkhash].js",
            path: path.resolve(__dirname, "dist")
        },

        resolve: {
            extensions: [".ts", ".tsx", ".js", ".json"],
        },

        module: {
            rules: [

                // transpiling code
                {
                    test: /\.tsx?$/, use: {
                        loader: "babel-loader",
                        options: babelConfig
                    }
                },

                // extract css imports
                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, "css-loader"]
                },

                // bundle image files
                {
                    test: /\.(jpg|png|gif|bmp)$/, use: {
                        loader: "file-loader",
                        options: { name: "[name].[contenthash].[ext]", outputPath: "images/" }
                    }
                },
            ]

        }, // end module

        // we dont want this dependencies to be bundled. See HmtlWebpackExternalsPlugin below.
        externals: {
            "react": "React",
            "react-dom": "ReactDOM",
            "react-router-dom": "ReactRouterDOM",
            "axios": "axios"
        },

        plugins: [

            // delete everything from dist folder before build
            new CleanWebpackPlugin(),

            // auto generates index.html
            new HtmlWebpackPlugin({
                title: "React Template",
                hash: true,
                favicon: "src/favicon.ico",
                template: "src/index.html"
            }),

            // options for extracted css
            new MiniCssExtractPlugin({
                filename: isDev ? "[name].css" : "[contenthash].css"
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
                    {
                        module: "axios",
                        global: "axios",
                        entry: isDev ? "dist/axios.js" : "dist/axios.min.js"
                    },
                ]
            }),

            // HotModuleReplacementPlugin necessary to hot reloading
            isDev && new webpack.HotModuleReplacementPlugin(),

            // Hot realoading plugin
            isDev && new ReactRefreshWebpackPlugin()

        ].filter(Boolean), // end plugins

        devServer: isDev ?
            {
                port: 9000,
                historyApiFallback: true,
                hot: true
            } :
            undefined

    };
}



module.exports = function (env) {
    const isDev = !env.PRODUCTION;

    console.log("\n\n####\n" +
        (isDev ? "DEVELOPMENT" : "PRODUCTION") +
        "\n####\n\n")

    return getConfig(isDev);
}