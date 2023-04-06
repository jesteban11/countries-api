const chai = require('chai');
const expect = chai.expect;
const countries = require('../api/countries')

describe('Verify test get country by name API', () => {
    it('should get the capital of Colombia which is Bogotá', async () => {
        const results = await countries.getCountry('colombia');
        const colombia = results.find((result) => result.name.common === 'Colombia');
        expect(colombia.capital[0]).to.be.equal('Bogotá')
    });
});