import Core from './Core';

test('typing numbers', () => {
  const core = new Core();

  expect(core.process('9')).toBe('9');
  expect(core.process('8')).toBe('98');
});

test('dot correct handling', () => {
  const core = new Core();

  expect(core.process('dot')).toBe('0.');
  expect(core.process('9')).toBe('0.9');
  expect(core.process('dot')).toBe('0.9');
});

test('zero correct output', () => {
  const core = new Core();

  expect(core.process('clear')).toBe('0');
  expect(core.process('1')).toBe('1');
});

test('entering digits', () => {
  const core = new Core();

  expect(core.isDigitInput('clear')).toBe(false);
  expect(core.isDigitInput('1')).toBe(true);
});

test('clear resets contructor', () => {
  const core = new Core();

  expect(core.process('2')).toBe('2');
  expect(core.process('multiply')).toBe(undefined);
  expect(core.previous).toBe('2');
  expect(core.process('clear')).toBe('0');
  expect(core.previous).toBe('0');
  expect(core.last).toBe(null);
  expect(core.operation).toBe(null);
  expect(core.canErase).toBe(true);
  expect(core.lastOp).toBe(null);
  expect(core.error).toBe(false);
});

test('handling erase & canErase flag', () => {
  const core = new Core();

  expect(core.process('1')).toBe('1');
  expect(core.process('2')).toBe('12');
  expect(core.process('3')).toBe('123');
  expect(core.canErase).toBe(true);
  expect(core.previous).toBe('123');
  expect(core.last).toBe(null);
  expect(core.process('erase')).toBe('12');
  expect(core.process('erase')).toBe('1');
  expect(core.process('erase')).toBe('0');
  expect(core.canErase).toBe(true);
  expect(core.process('multiply')).toBe(undefined);
  expect(core.canErase).toBe(false);
  expect(core.process('1')).toBe('1');
  expect(core.canErase).toBe(true);
  expect(core.previous).toBe('0');
  expect(core.last).toBe('1');
  expect(core.process('erase')).toBe('0');
});

test('erase() function', () => {
  const core = new Core();

  expect(core.erase(null)).toBe('0');
  expect(core.erase('1')).toBe('0');
  expect(core.erase('123')).toBe('12');
});

test('simple math operation typing', () => {
  const core = new Core();

  expect(core.process('multiply')).toBe(undefined);
  expect(core.operation).toBe('multiply');
  expect(core.process('divide')).toBe(undefined);
  expect(core.operation).toBe('divide');
  expect(core.process('minus')).toBe(undefined);
  expect(core.operation).toBe('minus');
  expect(core.process('plus')).toBe(undefined);
  expect(core.operation).toBe('plus');
  expect(core.process('randomstring')).toBe(undefined);
  expect(core.operation).toBe('plus');
});
