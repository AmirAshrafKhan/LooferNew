// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function(app) {
//   app.use(
//     '/api/',
//     createProxyMiddleware({
//       target: 'https://loofer.bellazza.in',
//       changeOrigin: true,
//     })
//   );
// }

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/',
    createProxyMiddleware({
      target: 'https://loofer.bellazza.in',
      changeOrigin: true,
    })
  );
}