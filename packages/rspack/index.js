const { getWebpackWatchOptions } = require('./core/getWebpackWatchOptions')

module.exports = {
  rspackCommonConfig: require('./core/rspackCommonConfig'),
  getWebpackWatchOptions,
  rspackDevConfig: require('./core/rspackDevConfig'),
  rspackProdConfig: require('./core/rspackProdConfig')
}
