const mix = require("laravel-mix");

const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .js("resources/js/app.js", "public/js")
  .sass("resources/sass/app.scss", "public/css");
mix.browserSync("justwest.test");

// mix.webpackConfig(
//   (module.exports = {
//     plugins: [
//       new HtmlWebpackPlugin({
//         template: "public/index.html",
//         filename: path.resolve(__dirname, "dist/index.html")
//       }),

//       new PrerenderSPAPlugin({
//         // Required - The path to the webpack-outputted app to prerender.
//         staticDir: path.join(__dirname, 'dist'),
//         // Required - Routes to render.
//         routes: [ '/' ],
//       })
//     ]
//   })
// );
