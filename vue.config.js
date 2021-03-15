module.exports = {

  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/scss/variables/index.scss";
        `
      }
    }
  },


  /**
   * для Apache Cordova
   * publicPath: ''
   *
   * для размещения на веб-сервере
   * publicPath: '/'
   */
  publicPath: '/',

  // DEV
  // devServer: {
  //
  //   disableHostCheck: true,
  //   port: 80,
  //   host: '0.0.0.0'
  // }
};
