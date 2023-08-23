const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
    it('should calculate a sum', () => {
        assert.strictEqual(calculateNumber('SUM', 2, 3), 5);
        assert.strictEqual(calculateNumber('SUM', 2.5, 2.7), 6);
        assert.strictEqual(calculateNumber('SUM', -3.2, 2), -1);
        assert.strictEqual(calculateNumber('SUM', 2.2, 1.2), 3);
    });
    it('should calculate substraction', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 2, 3), -1);
        assert.strictEqual(calculateNumber('SUBTRACT', 2, 2), 0);
        assert.strictEqual(calculateNumber('SUBTRACT', 4, 2), 2);
        assert.strictEqual(calculateNumber('SUBTRACT', -2, -2), 0);
        assert.strictEqual(calculateNumber('SUBTRACT', -2.7, 1), -4);
        assert.strictEqual(calculateNumber('SUBTRACT', -2.3, -1), -1);
        assert.strictEqual(calculateNumber('SUBTRACT', -2.4, -1.7), 0);
    });
    it('should calculate division', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 2, 2), 1);
        assert.strictEqual(calculateNumber('DIVIDE', -2, -2), 1);
        assert.strictEqual(calculateNumber('DIVIDE', -2, 2), -1);
        assert.strictEqual(calculateNumber('DIVIDE', 1.7, 2), 1);
        assert.strictEqual(calculateNumber('DIVIDE', 2.3, 2.3), 1);
        assert.strictEqual(calculateNumber('DIVIDE', -2.4, -1.7), 1);
    });
    it ('should return "Error" when b is rounded to 0', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 2, 0), 'Error');
        assert.strictEqual(calculateNumber('DIVIDE', 2, 0.3), 'Error');
    });
})
