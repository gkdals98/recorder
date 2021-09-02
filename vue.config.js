const path = require('path');
module.exports = {
    css: {
        sourceMap:true,
        loaderOptions: {
          sass: {
            prependData: `
              @import "@/assets/styles/global.scss";
            `
          }
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                'pages': path.join(__dirname, 'src/pages'),
                'assets': path.join(__dirname, 'src/assets'),
                'components': path.join(__dirname, 'src/components'),
            }
        }
    }  
}