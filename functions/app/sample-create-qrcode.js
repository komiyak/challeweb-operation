'use strict';

const path = require('path');
const QRCode = require('qrcode');

const run = (req, res) => {
    QRCode.toDataURL('https://example.com', function (err, url) {
        console.log(url)
    });

    const fontDescriptors = {
        Roboto: {
            normal: path.join(__dirname, '..', '/fonts/Roboto-Regular.ttf'),
            bold: path.join(__dirname, '..', '/fonts/Roboto-Medium.ttf'),
            italics: path.join(__dirname, '..', '/fonts/Roboto-Italic.ttf'),
            bolditalics: path.join(__dirname, '..', '/fonts/Roboto-MediumItalic.ttf')
        }
    };

    console.log(path.join(__dirname, '..', '/fonts/Roboto-Regular.ttf'));

    var PdfPrinter = require('pdfmake');
    var printer = new PdfPrinter(fontDescriptors);
    var fs = require('fs');

    var docDefinition = {
        content: [
            'First paragraph',
            'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines'
        ]
    };

    var pdfDoc = printer.createPdfKitDocument(docDefinition);
    pdfDoc.pipe(fs.createWriteStream('basics.pdf'));
    pdfDoc.end();

    res.send('The QR code built!');
};

module.exports = {run};
