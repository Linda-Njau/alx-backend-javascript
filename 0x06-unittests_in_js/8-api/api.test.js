const request = require('request');
const { expect } = require('chai');
const baseUrl = 'http://localhost:7865';

describe('API Tests', () => {
    it('should return correct status code', (done) => {
        request.get(baseUrl,(error, response, body) => {
            expect(response.statusCode).to.be.equal(200);
            done();
        });   
    });

    it('should return correct message', (done) => {
        request.get(baseUrl,(error, response, body) => {
            expect(body).to.be.equal('Welcome to the payment system');
            done();
        });        
    });
});
