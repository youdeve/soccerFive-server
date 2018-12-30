var Encore = require('@symfony/webpack-encore');

Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build')


    .enableSingleRuntimeChunk()

    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())
    .configureFilenames({
      images: 'images/[name].[ext]',
    })

    .addEntry('app', './assets/js/app.js')
    // .addEntry('css', './assets/sass/app.sass')  
    .addEntry('slick-carousel', './assets/js/slick-carousel.js')

    .enableSassLoader()
;

module.exports = Encore.getWebpackConfig();
