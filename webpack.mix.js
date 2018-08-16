const mix = require('laravel-mix');
require('laravel-mix-tailwind');

mix.setPublicPath('public')
   .js('resources/js/index.js', 'public/js')
   .less('resources/less/index.less', 'public/css')
   .tailwind();
