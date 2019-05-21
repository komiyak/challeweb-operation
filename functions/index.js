'use strict';

const helloWorld = require('./app/hello-world');
exports.helloWorld = helloWorld.run;

const listingApi = require('./app/listing-api');
exports.listingApi = listingApi.run;

const sampleCreateQrcode = require('./app/sample-create-qrcode');
exports.sampleCreateQrcode = sampleCreateQrcode.run;
