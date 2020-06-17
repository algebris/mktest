/* eslint-disable no-console */
const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');

const Routes = require('./routes');
const conf = require('./config');

const init = async () => {
  const server = Hapi.server(conf.server);
  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: conf.swagger,
    },
  ]);

  await Routes(server);
  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
