const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/weatherforecast',
    createProxyMiddleware({
      target: 'https://localhost:7056',
      changeOrigin: false,
      secure: false
    })
  );
};