const mix = require('laravel-mix');
require('laravel-mix-tailwind');
require('laravel-mix-purgecss');

mix.setPublicPath('public')
   .js('resources/js/index.js', 'public/js')
   .less('resources/less/index.less', 'public/css')
   .tailwind()
   .purgeCss({
       folders: ['public']
   });
