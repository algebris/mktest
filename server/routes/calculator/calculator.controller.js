const calculatorService = require('./calculator.service');
const calculatorValidator = require('./calculator.validator');

const routes = [
  {
    method: 'POST',
    path: '/operation',
    config: {
      handler: calculatorService.performOperation,
      notes: ['Perform simple math operations'],
      description: 'Operation',
      tags: ['api', 'calculator'],
      plugins: {
        'hapi-swagger': {
          responses: calculatorValidator.responses,
        },
      },
      validate: {
        payload: calculatorValidator.body,
      },
      cors: true,
    },
  },
];

module.exports = routes;
