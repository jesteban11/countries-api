const chai = require('chai');
const expect = chai.expect;
const capital = require('../api/capital')

describe('Verify get capital by name API', () => {
    it('should get Spain when Madrid is sent ', async () => {
        const results = await capital.getCapitalByName('Madrid');
        const spain = results.find((result) => result.name.common === 'Spain');
        expect(spain.capital[0]).to.be.equal('Madrid')     
    });
});