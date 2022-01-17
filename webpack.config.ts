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
        presets: [ "@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript" ],
        plugins: [ 
            "@babel/plugin-proposal-class-properties",
            "@babel/plugin-transform-runtime",
            env.hot && require.resolve("react-refresh/babel")
        ].filter(Boolean)
    };

    return {

        context: path.join(__dirname, "src"),

        mode: env.production ? "production" : "development",

        devtool: env.production ? undefined : "source-map",

        target: "web",

        resolve: {
            extensions: [".ts", ".tsx", ".js", ".json"],
            plugins: [new TsconfigPathsPlugin()]
        },

        entry: { 
            index: "./Index.tsx" 
        },

        output: {
            path: path.resolve(__dirname, "dist"),
            filename: env.production ? "js/[name][contenthash].js" : "js/[name].js",
            assetModuleFilename: "asset/[name].[hash].[ext]",
            publicPath: "/"
        },

        module: {
            rules: [

                { 
                    test: /\.tsx?$/i, 
                    use: {
                        loader: "babel-loader",
                        options: babelConfig
                    }
                },

                {
                    test: /\.css$/i,
                    use: [MiniCssExtractPlugin.loader, "css-loader"]
                },

                {
                    test: /\.(jpe?g|png|gif|svg)$/i, 
                    type: "asset/resource"
                },
            ]

        }, // end module

        plugins: [

            new CleanWebpackPlugin(),

            new HtmlWebpackPlugin({
                favicon: "./resources/images/favicon.ico",
                template: "./resources/index.html",
                minify: env.production
            }),

            new MiniCssExtractPlugin({
                filename: "css/" +  (env.production ? "[name].[hash].css" : "[name].css")
            }),

            env.hot && new ReactRefreshWebpackPlugin()

        ].filter(Boolean), // end plugins

        devServer:
        {
            port: 9000,
            historyApiFallback: true,
            hot: env.hot,
            devMiddleware: {
                writeToDisk: true
            }
        }

    };
}

export default function (e: any) {

    const env: Env = {
        production: !!e["PRODUCTION"],
        hot: !e["PRODUCTION"] && !!e["HOT"]
    };

    return createConfiguration(env);
}