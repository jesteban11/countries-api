const Service = require('./service');
const env = process.env.NODE_ENV || 'dev';
const config = require(`../environment/${env}.js`);
const baseUrl = config.baseUrl;

class Countries {
    constructor() {
        this.api = new Service(baseUrl);
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

