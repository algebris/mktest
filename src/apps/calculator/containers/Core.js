/* eslint-disable class-methods-use-this */
/**
 * Core Calcaulator component
 */

class Core {
  constructor() {
    this.previous = '0';
    this.last = null;
    this.operation = null;
    this.canErase = true;
    this.lastOp = null;
    this.error = false;
  }

  process(input) {
    if (this.isDigitInput(input) || input === 'dot') {
      return this.processDigits(input);
    } else {
      return this.processOperation(input);
    }
  }

  processDigits(input) {
    this.error = false;
    if (!this.canErase && input === 'dot') {
      return;
    }
    if (!this.operation && this.canErase) {
      if (input === 'dot') {
        return this.previous = this.handleDot(this.previous);
      }
      return this.previous = (this.previous === '0') ? input : this.previous + input;
    } else {
      if (input === 'dot' && this.canErase) {
        return this.last = this.handleDot(this.last);
      } else {
        this.canErase = true;
      }
      return this.last = (this.last === '0' || this.last === null) ? input : this.last + input;
    }
  }

  async processOperation(input) {
    if (input === 'clear') {
      this.clear();
      return this.previous;
    }
    // if error block keyboard for other operation but clear
    if (this.error) {
      return;
    }

    if (input === 'erase' && this.canErase) {
      if (!this.operation) {
        return this.previous = this.erase(this.previous);
      } else {
        return this.last = this.erase(this.last);
      }
    }

    if (['plus', 'minus', 'multiply', 'divide'].includes(input)) {
      this.canErase = false;
      if (this.operation && this.last && this.lastOp !== 'equal') {
        await this.handleCalculate();
        this.last = null;
        this.operation = input;
        return this.previous;
      }
      this.last = null;
      this.operation = input;
    }
    this.lastOp = input;

    if (input === 'equal') {
      if (!this.last && this.operation) {
        this.last = this.previous;
      }
      if (!this.last && !this.operation) {
        return;
      }
      return this.handleCalculate();
    }
  }

  async handleCalculate() {
    this.canErase = false;
    const response = await this.handleCalculateAPI({
      last: String(this.last),
      previous: String(this.previous),
      operation: String(this.operation),
    });

    if (response.error) {
      this.clear();
      this.error = true;
    } else {
      this.previous = response.result;
      return this.previous;
    }
  }

  erase(value) {
    return (value === null || value.length === 1) ? '0' : value.slice(0, -1);
  }

  handleDot(value) {
    return value.includes('.') ? value : `${value}.`;
  }

  isDigitInput(string) {
    return !Number.isNaN(Number(string));
  }

  clear() {
    this.previous = '0';
    this.last = null;
    this.operation = null;
    this.canErase = true;
    this.lastOp = null;
    this.error = false;
  }
}

export default Core;
