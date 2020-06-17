module.exports = {
  port: process.env.API_PORT || '3000',
  host: process.env.API_HOST || 'localhost',
  routes: {
    cors: true,
  },
};
