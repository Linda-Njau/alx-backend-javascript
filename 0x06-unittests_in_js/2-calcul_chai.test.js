const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', () => {
    it('should calculate a sum', () => {
        expect(calculateNumber('SUM', 2, 3)).to.equal(5);
        expect(calculateNumber('SUM', 2.5, 2.7)).to.equal(6);
        expect(calculateNumber('SUM', -3.2, 2)).to.equal(-1);
        expect(calculateNumber('SUM', 2.2, 1.2)).to.equal(3);
    });
    it('should calculate substraction', () => {
        expect(calculateNumber('SUBTRACT', 2, 3)).to.equal(-1);
        expect(calculateNumber('SUBTRACT', 2, 2)).to.equal(0);
        expect(calculateNumber('SUBTRACT', 4, 2)).to.equal(2);
        expect(calculateNumber('SUBTRACT', -2, -2)).to.equal(0);
        expect(calculateNumber('SUBTRACT', -2.7, 1)).to.equal(-4);
        expect(calculateNumber('SUBTRACT', -2.3, -1)).to.equal(-1);
        expect(calculateNumber('SUBTRACT', -2.4, -1.7)).to.equal(0);
    });
    it('should calculate division', () => {
        expect(calculateNumber('DIVIDE', 2, 2)).to.equal(1);
        expect(calculateNumber('DIVIDE', -2, -2)).to.equal(1);
        expect(calculateNumber('DIVIDE', -2, 2)).to.equal(-1);
        expect(calculateNumber('DIVIDE', 1.7, 2)).to.equal(1);
        expect(calculateNumber('DIVIDE', 2.3, 2.3)).to.equal(1);
        expect(calculateNumber('DIVIDE', -2.4, -1.7)).to.equal(1);
    });
    it ('should return "Error" when b is rounded to 0', () => {
        expect(calculateNumber('DIVIDE', 2, 0)).to.equal('Error');
        expect(calculateNumber('DIVIDE', 2, 0.3)).to.equal('Error');
    });
})
