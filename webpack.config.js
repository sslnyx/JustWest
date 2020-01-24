/**
 * As our first step, we'll pull in the user's webpack.mix.js
 * file. Based on what the user requests in that file,
 * a generic config object will be constructed for us.
 */
let mix = require("./node_modules/laravel-mix/src/index");

let ComponentFactory = require("./node_modules/laravel-mix/src/components/ComponentFactory");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var PrerenderSPAPlugin = require("prerender-spa-plugin");

new ComponentFactory().installAll();

require(Mix.paths.mix());

// var HtmlWebpackPlugin = require('html-webpack-plugin');
// const PrerenderSPAPlugin = require("prerender-spa-plugin");

// module.exports.plugins = (module.exports.plugins || []).concat(
//   new HtmlWebpackPlugin({
//     template: "public/index.html",
//     inject: false
//   }),

//   module.exports.plugins = (module.exports.plugins || []).concat(
//     new PrerenderSPAPlugin({
//         // Required - The path to the webpack-outputted app to prerender.
//         staticDir: path.join(__dirname, 'dist'),
//         // Required - Routes to render.
//         routes: [ '/' ],
//       })
//   )
// );

/**
 * Just in case the user needs to hook into this point
 * in the build process, we'll make an announcement.
 */

Mix.dispatch("init", Mix);

/**
 * Now that we know which build tasks are required by the
 * user, we can dynamically create a configuration object
 * for Webpack. And that's all there is to it. Simple!
 */

let WebpackConfig = require("./node_modules/laravel-mix/src/builder/WebpackConfig");

module.exports = new WebpackConfig().build();

module.exports.plugins.push(
  new HtmlWebpackPlugin({
    template: Mix.paths.root("public/index.html"),
    // filename: path.resolve(__dirname, "dist/index.html")
    inject: true
  })
);

module.exports.plugins.push(
  new PrerenderSPAPlugin({
    staticDir: path.join(__dirname, "dist"),
    routes: ["/"]
  })
);

module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          'babel-loader',
          'vue-svg-loader',
        ],
      },
    ],
  },
};
