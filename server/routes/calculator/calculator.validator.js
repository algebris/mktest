const Joi = require('@hapi/joi');

module.exports = {
  body: Joi.object({
    previous: Joi.string().required().description('Left operand').example('123'),
    last: Joi.string().required().description('Right operand').example('4'),
    operation: Joi.string().valid('minus', 'plus', 'multiply', 'divide').required().description('operation to perform, e.g. plus, minus, ...'),
  }),
  responses: {
    200: {
      description: 'OK',
      schema: Joi.object({
        result: Joi.string(),
      }),
    },
    400: {
      description: 'Bad request',
    },
  },
};
