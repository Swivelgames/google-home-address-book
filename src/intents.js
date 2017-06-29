const req = require.context('.', true, /\.\/intents\/[^/]+\/[^/]+\.js$/)

req.keys().forEach((key) => {
  module.exports[
    key.replace(/^.+\/([^/]+)\.js/, '$1')
  ] = req(key).default
});
