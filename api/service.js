
const axios = require('axios');

class Service {
    constructor(baseURL) {
        this.api = axios.create({ baseURL });
    }

    async get(endpoint, params = {}) {
        try {
            const response = await this.api.get(endpoint, { params });
            return response.data;
        } catch (error) {
            throw new Error(`Failed to make GET request to ${endpoint}: ${error.message}`);
        }
    }

    async post(endpoint, data) {
        try {
            const response = await this.api.post(endpoint, data);
            return response.data;
        } catch (error) {
            throw new Error(`Failed to make POST request to ${endpoint}: ${error.message}`);
        }
    }

}

module.exports = Service;