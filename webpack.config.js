require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");


let vendor = [
    { from: "node_modules/react/umd/react.development.js", to: "vendor"},
    { from: "node_modules/react-dom/umd/react-dom.development.js", to: "vendor"}
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
            { test: /\.tsx?$/, loader: 'babel-loader' },
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
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