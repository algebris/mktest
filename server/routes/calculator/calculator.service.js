const Decimal = require('decimal.js');

module.exports.performOperation = (req) => {
  const { previous, last, operation } = req.payload;
  let result;
  const prev = new Decimal(previous);
  Decimal.set({ precision: 25 });
  try {
    switch (operation) {
      case 'minus':
        result = prev.minus(last);
        break;
      case 'plus':
        result = prev.plus(last);
        break;
      case 'multiply':
        result = prev.times(last);
        break;
      case 'divide':
        result = prev.div(last);
        break;
      default:
        break;
    }
  } catch (err) {
    return { error: true, result: null };
  }

  if (result.isNaN() || result.gt(Number.MAX_VALUE) || result.lt(-Number.MAX_VALUE)) {
    return { error: true, result: null };
  }

  return { result: result.toString() };
};
