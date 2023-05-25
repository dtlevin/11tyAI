const mix = require('laravel-mix');
const glob = require('glob');

mix.disableNotifications()
// Compile JS and SCSS. Places all js into the app.js file and ALL scss into the style.css file. 
// If you want to compile each js file into its own file, uncomment the below code. and comment this out and run npm run start again.
mix.js("src/js/*.js", "/dist/js/app.js").sass("src/scss/style.scss", "/dist/css/"); 


// Uncomment the below to compile each js file into its own file

    // glob.sync('src/js/*.js').forEach(function(file) {
    //     mix.js(file, 'dist/js');
    // });

    // mix.sass("src/scss/style.scss", "dist/css");

// Autoprefixer is enabled by default, see:
// https://laravel-mix.com/docs/6.0/autoprefixer
