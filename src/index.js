const mix = require('laravel-mix')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const path = require('path')

class WebApp {

    /**
     * Dependencies for plugin.
     *
     * @return {String[]}
     */
    dependencies() {
        return [
            'html-webpack-plugin',
            'favicons-webpack-plugin'
        ]
    }

    /**
     * Plugin functionality.
     *
     * @param {logo: String, filename: String, outputPath: String, prefix: String, favicons: Object} options
     */
    register(options = {}) {
        options.logo = path.resolve(options.logo)

        this.options = Object.assign({
            filename: 'webapp.html',
            outputPath: '/webicons',
            prefix: 'assets/webicons/',
            favicons: {},
        }, options)
    }

    /**
     * @return {Object}
     */
    webpackPlugins() {
        return [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'template.ejs'),
                filename: this.options.filename,
                inject: false,
            }),
            new FaviconsWebpackPlugin({
                logo: this.options.logo,
                outputPath: this.options.outputPath,
                prefix: this.options.prefix,
                cache: false,
                inject: true,
                favicons: this.options.favicons,
            }),
        ]
    }

    /**
     *
     */
    webpackConfig(webpackConfig) {
        Mix.manifest.add(this.options.filename)
    }
}

mix.extend('webApp', new WebApp())
