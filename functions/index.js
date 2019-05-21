'use strict';

exports.helloWorld = (req, res) => {
    console.log('in hello world.');
    res.send('Hello World!' + ', env:' + process.env.SAMPLE);
};

const axios = require('axios');
const axiosClient = axios.create({
    baseURL: process.env.API_ENDPOINT,
    responseType: 'json'
});

exports.listingApi = (req, res) => {
    axiosClient.get('/users')
        .then((response) => {
            console.log(response.data);
        });

    res.status(204).send('');
};
