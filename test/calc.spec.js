const expect = require("chai").expect;

const Calc = require('../calc');
const calc = new Calc();
const irrf = 667;

describe('Calc test suit', () => {
  it('should be defined', () => {
    expect(calc).to.exist;
  })

  it('should have default proprieties', () => {
    expect(calc.irrf).to.be.equal(0.015);
    expect(calc.pcc).to.be.equal(0.0465);
    expect(calc.min_amount).to.be.equal(10.00);
    expect(calc.min_calc_pcc).to.be.equal(666.99);
  })

  it('should not calculate pcc', () => {
    expect(calc.calculatePccValue(calc.min_calc_pcc - 1)).to.be.equal(0);
  })

  it('should calculate pcc', () => {
    expect(calc.calculatePccValue(calc.min_calc_pcc + 1)).to.be.equal((calc.min_calc_pcc+1)*calc.pcc)
  })

  it ('should calculate irrf', () => {
    expect(calc.calculateIrrfValue(irrf)).to.be.equal(irrf*calc.irrf);
  })

  it ('should not calculate irrf', () => {
    expect(calc.calculateIrrfValue(irrf - 1)).to.be.equal(0);
  })

  it ('should return value', () => {
    expect(calc.validateValue(calc.min_amount + 1)).to.be.equal(calc.min_amount + 1);
  })

  it ('should not return value', () => {
    expect(calc.validateValue(calc.min_amount - 1)).to.be.equal(0);
  })

  it('should calculate value with both taxes', () => {
    expect(calc.calculate(calc.min_calc_pcc)).to.be.equal(708.009885);
  })
})
