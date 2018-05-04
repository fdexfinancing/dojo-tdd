class Calc {
  constructor() {
    this.irrf = 0.015;
    this.pcc = 0.0465;
    this.min_amount = 10.00;
    this.min_calc_pcc = 666.99;
  }

  calculatePccValue(value) {
    if (value < this.min_calc_pcc) {
      return 0;
    }

    return this.validateValue(value * this.pcc)
  }

  calculateIrrfValue(value) {
    return this.validateValue(value * this.irrf);
  }

  validateValue(value) {
    if (value > this.min_amount){
      return value;
    }
    return 0;
  }

  calculate(value) {

    return value + this.calculatePccValue(value) + this.calculateIrrfValue(value);
  }
}

module.exports = Calc;
