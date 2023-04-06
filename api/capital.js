const Service = require('./service');
const env = process.env.NODE_ENV || 'dev';
const config = require(`../environment/${env}.js`);
const baseUrl = config.baseUrl;

class Capital {
    constructor() {
        this.api = new Service(baseUrl);
    }

    getCapitalByName(capital) {
        return this.api.get(`/v3.1/capital/${capital}`, { page: 1, limit: 10 })
            .then(data => data)
            .catch(error => error);
    }
}

module.exports = new Capital();

