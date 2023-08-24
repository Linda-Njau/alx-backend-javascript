const getPaymentTokenFromAPI = require('./6-payment_token.js');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised)
const { expect } = chai;

describe('getPaymentTokenFromAPI', () => {
    it('should resolve with correct data when success is true', (done) => {
        const success = true;
        const promise = getPaymentTokenFromAPI(success);
        expect(promise).to.eventually.deep.equal({data: 'Successful response from the API' })
          .notify(done);
    });
});
