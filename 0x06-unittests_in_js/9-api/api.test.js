const request = require('request');
const { expect } = require('chai');
const baseUrl = 'http://localhost:7865';

describe('Index page', () => {
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
describe('Cart page', () => {
    it('should return status code(200) when id is number', (done) => {
        request.get(`${baseUrl}/cart/123`, (error, response, body) => {
            expect(response.statusCode).to.be.equal(200);
            done();
        });
    });
    it('Should return correct message when id is number', (done) => {
        request.get(`${baseUrl}/cart/123`, (error, response, body) => {
            expect(body).to.be.equal(`Payment methods for cart 123`);
            done();
        });
    it('Should return status code(404) when id is not valid', (done) => {
        request.get(`${baseUrl}/cart/hello`, (error, response, body) => {
            expect(response.statusCode).to.be.equal(404);
            done();
        });
    });
    });
});
