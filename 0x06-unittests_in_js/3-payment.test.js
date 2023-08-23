const sinon = require('sinon');
const { assert } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi', () => {
    it('should call Utils.calculateNumber with correct args', () => {
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20);
        assert.isTrue(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20));
        calculateNumberSpy.restore();
    });
});
