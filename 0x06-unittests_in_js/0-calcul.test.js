const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function() {
    it('should return the rounded sum of two integers', function() {
        assert.strictEqual(calculateNumber(1, 3), 4);
        assert.strictEqual(calculateNumber(1, -3), -2);
        assert.strictEqual(calculateNumber(-1, -1), -2);
    });
    it('should return the rounded sum with a float(below .5)', function() {
        assert.strictEqual(calculateNumber(1, 3.4), 4);
        assert.strictEqual(calculateNumber(1, -3.4), -2);
        assert.strictEqual(calculateNumber(1.2, 1.2), 2);
    });

    it('should return the rounded sum with a float(above .5)', function() {
        assert.strictEqual(calculateNumber(1, 2.7), 4);
        assert.strictEqual(calculateNumber(1.7, 1.7), 4);
        assert.strictEqual(calculateNumber(-1.7, -1.7), -4);
    });
    it('should return the rounded sum with a float(at .5)', function() {
        assert.strictEqual(calculateNumber(1, -2.5), -1);
        assert.strictEqual(calculateNumber(1.5, 1.5), 4);
        assert.strictEqual(calculateNumber(2, 3.5), 6);
    });
});
