'use strict';

const axios = require('axios');
const axiosClient = axios.create({
    baseURL: process.env.API_ENDPOINT,
    responseType: 'json'
});

const run = (req, res) => {
    axiosClient.get('/users')
        .then((response) => {
            console.log(response.data);
        });
    res.status(204).send('');
};

module.exports = {run};
