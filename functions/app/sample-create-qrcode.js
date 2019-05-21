'use strict';

const QRCode = require('qrcode');

const run = (req, res) => {
    QRCode.toDataURL('https://example.com', function (err, url) {
        console.log(url)
    });

    res.send('The QR code built!');
};

module.exports = {run};
