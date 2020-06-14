class Core {
  constructor() {
    this.leftOperand = null;
    this.rightOperand = null;
    this.operation = null;
    this.number = '';
    this.canErase = false;
  }

  process(input) {
    if (isDigitInput(input) || input === 'dot') {
      return processDigits(input);
    } else {
      return processOperation(input);
    }
  }

  processDigits(input) {
    if (this.leftOperand && this.operation) {
      this.rightOperand = value;
    }
    if (this.number === '0' || this.number === null) {
      setOperand(input);
    } else {
      setOperand(this. + keyEvt);
    }
  }

  processOperation(input) {
    if(input)
  }
  
  isDigitInput(string) {
    return !Number.isNaN(Number(string));
  }

  clear() {
    this.leftOperand = null;
    this.rightOperand = null;
    this.operation = null;
  }
}