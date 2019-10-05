const mix = require('laravel-mix');

require('laravel-mix-tailwind');
require('laravel-mix-purgecss');

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

mix.js('app.js', 'public/js')
//    .postCss('app.css', 'public/css')
//    .purgeCss();

/* while developing make sure public/vendor/pipe-dream/laravel is fresh */
mix.copy('public/js/app.js', './public/vendor/pipe-dream/laravel-create/js/app.js')
mix.copy('node_modules/@pipe-dream/core/dist/pipe-dream.css', './public/vendor/pipe-dream/laravel-create/css/pipe-dream.css')


mix.disableSuccessNotifications();
if (mix.inProduction()) {
  mix.version();
}
