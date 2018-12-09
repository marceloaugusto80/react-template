require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

// list of non bundled libraries
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
            // transpiling for older browsers
            { test: /\.tsx?$/, loader: 'babel-loader', options: { presets: ["@babel/preset-env"] } },
            // transpiling typescript
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            // maintain source maps continuity
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    // this libraries are used in our code, but not bundled with it
    externals: {
        'react': 'React',  
        'react-dom' : 'ReactDOM'  
       },

    plugins: [
        // copy libraries that were not bundled to the output directory
        new CopyWebpackPlugin(vendor)
    ]

};