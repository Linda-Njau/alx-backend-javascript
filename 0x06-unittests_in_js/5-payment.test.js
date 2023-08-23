const { expect } = require('chai'); 
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment.js');

describe('sendPaymentRequestToApi', () => {
    let consoleLogSpy;

    beforeEach(() => {
        consoleLogSpy = sinon.spy(console, 'log');
    });
    afterEach(() => {
        consoleLogSpy.restore();
    });
    it('should log "The total is: 120" when called once with 100 and 20', () => {
        sendPaymentRequestToApi(100, 20);
        expect(consoleLogSpy.calledOnceWithExactly('The total is: 120')).to.be.true; 
    });
    it('should log "The total is: 20" when called once with 10 and 10', () => {
        sendPaymentRequestToApi(10, 10);
        expect(consoleLogSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
    });
});
