module.exports.performOperation = (req) => {
  const { previous, last, operation } = req.payload;
  let result;
  switch (operation) {
    case 'minus':
      result = Number(previous) - Number(last);
      break;
    case 'plus':
      result = Number(previous) + Number(last);
      break;
    case 'multiply':
      result = Number(previous) * Number(last);
      break;
    case 'divide':
      result = Number(previous) / Number(last);
      break;
    default:
      break;
  }
  if (Number.isNaN(result) || !Number.isFinite(result)) {
    return { error: true, result: null };
  }
  return { result };
};
