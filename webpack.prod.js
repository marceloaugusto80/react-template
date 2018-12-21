const merge = require("webpack-merge");
const common = require("./webpack.common");
const HtmlWebpackExternalsPlugin = require("html-webpack-externals-plugin");



module.exports = merge(common, {
    
    // build mode 
    mode: "production",
    
    plugins: [
        
        // include external libraries to html. externals are used in code but excluded from build
        new HtmlWebpackExternalsPlugin({
            externals: [
                { module: "react", global: "React", entry: "umd/react.production.min.js" },
                { module: "react-dom", global: "ReactDOM", entry: "umd/react-dom.production.min.js" }
            ]
        })
        
     ]

});

