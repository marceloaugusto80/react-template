import path from "path";
import { Configuration } from "webpack";
import "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";

interface Env {
    production: boolean;
    hot: boolean;
}

function createConfiguration(env: Env): Configuration {

    const babelConfig = {
        presets: [
            ["@babel/preset-env", { targets: "> 0.25%, not dead" }],
            "@babel/preset-react",
            "@babel/preset-typescript"
        ],
        plugins: [
            "@babel/plugin-proposal-class-properties",
            "@babel/plugin-transform-runtime",
            env.hot && require.resolve("react-refresh/babel")
        ].filter(Boolean)
    };

    return {

        mode: env.production ? "production" : "development",

        devtool: env.production ? undefined : "source-map",

        target: "web",

        resolve: {
            extensions: [".ts", ".tsx", ".js", ".json"],
            plugins: [new TsconfigPathsPlugin()]
        },

        entry: { 
            index: "./src/Index.tsx" 
        },

        output: {
            path: path.resolve(__dirname, "dist"),
            filename: env.production ? "[name].[contenthash].js" : "[name].js",
        },

        module: {
            rules: [

                { 
                    test: /\.tsx?$/, 
                    use: {
                        loader: "babel-loader",
                        options: babelConfig
                    }
                },

                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, "css-loader"]
                },

                {
                    test: /\.(jpg|png|gif|bmp)$/, use: {
                        loader: "file-loader",
                        options: { name: "[name].[contenthash].[ext]", outputPath: "images/" }
                    }
                },
            ]

        }, // end module

        plugins: [

            new CleanWebpackPlugin(),

            new HtmlWebpackPlugin({
                title: "React Template",
                hash: true,
                favicon: "src/favicon.ico",
                template: "src/index.html"
            }),

            new MiniCssExtractPlugin({
                filename: env.production ? "[contenthash].css" : "[name].css"
            }),

            env.hot && new ReactRefreshWebpackPlugin()

        ].filter(Boolean), // end plugins

        devServer:
        {
            port: 9000,
            historyApiFallback: true,
            hot: env.hot
        }

    };
}

export default function (e: any) {

    const env: Env = {
        production: !!e["PRODUCTION"],
        hot: !e["PRODUCTION"] && e["HOT"]
    };

    return createConfiguration(env);
}