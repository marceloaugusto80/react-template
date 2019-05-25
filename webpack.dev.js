const merge = require("webpack-merge");
const common = require("./webpack.common");
const HtmlWebpackExternalsPlugin = require("html-webpack-externals-plugin");
const path = require("path");


module.exports = merge(common, {

    // build mode 
    mode: "development",

    plugins: [

        // include external libraries to html. externals are used in code but excluded from build
        new HtmlWebpackExternalsPlugin({
            externals: [
                { module: "react", global: "React", entry: "umd/react.development.js" },
                { module: "react-dom", global: "ReactDOM", entry: "umd/react-dom.development.js" }
            ]
        })

    ],

    // Enable sourcemaps for debugging webpack's output.
    devtool: "inline-source-map",

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 9000
    }
});

