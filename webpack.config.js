require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");


let vendor = [
    { from: "node_modules/react/umd/react.production.min.js", to: "vendor"},
    { from: "node_modules/react-dom/umd/react-dom.production.min.js", to: "vendor"}
];


module.exports = {
    entry: "./src/app.tsx",
    output: {
        filename: "app.js",
        path: __dirname + "/dist"
    },

    mode: "development",

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    externals: {
        'react': 'React',  
        'react-dom' : 'ReactDOM'  
       },

    plugins: [
        new CopyWebpackPlugin(vendor)
    ]

};