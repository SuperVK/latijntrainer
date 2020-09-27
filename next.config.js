const withPWA = require('next-pwa')
 
module.exports = withPWA({
    pwa: {
        dest: 'public',
        scope: '/latijntrainer/',
        sw: '/latijntrainer/sw.js'
    },
    basePath: '/latijntrainer'
})