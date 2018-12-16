require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");



// list of non bundled files
let externalFiles = [
    { from: "node_modules/react/umd/react.development.js", to: "vendor"},
    { from: "node_modules/react-dom/umd/react-dom.development.js", to: "vendor"},
    { from: "src/index.html", to: ""},
    { from: "src/favicon.ico", to: ""}
];



module.exports = {
    
    // the entry point of the application. where your app start executing.
    entry: "./src/app.tsx",

    // the compilation/bundling output
    output: {
        filename: "app.js",
        path: __dirname + "/dist"
    },

    // current environment. change to "production" before deploying
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
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            
            // bundle css references
            { test: /\.css$/, use: ["style-loader", "css-loader"] },

            // bundle other file references
            { 
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader', 
                options: { name: '[name].[ext]', outputPath: 'fonts/' }
            }
            
        ]
    },

    // this libraries are used in our code, but not bundled with it. It saves compilation time.
    externals: {
        'react': 'React',  
        'react-dom' : 'ReactDOM'  
       },

    plugins: [
        // take files that were not bundled and copy them to the output folder
        new CopyWebpackPlugin(externalFiles)
    ]

};