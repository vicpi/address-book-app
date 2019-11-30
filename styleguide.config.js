module.exports = {
    webpackConfig: require('./webpack/client/webpack.dev.config.js'),
    template: {
        head: {
            links: [
                {
                    rel: 'stylesheet',
                    href:
                    './styleguide/css/custom.css'
                }
            ]
        }
    }
}