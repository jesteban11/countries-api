const Service = require('./service');

class Countries {
    constructor() {
        this.api = new Service('https://restcountries.com');
    }

    getAllCountries() {
        this.api.get('/v3.1/all?fields=name', { page: 1, limit: 10 })
            .then(data => console.log(data))
            .catch(error => console.error(error));
    }

    getCountry(country) {
        return this.api.get(`/v3.1/name/${country}?fullText=true`, { page: 1, limit: 10 })
            .then(data => data)
            .catch(error => error);
    }
}

module.exports = new Countries();

