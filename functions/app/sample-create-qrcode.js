'use strict';

const path = require('path');
const PdfPrinter = require('pdfmake');

const createPdfBinary = (pdfDoc, callback) =>
{
    const fontDescriptors = {
        Roboto: {
            normal: path.join(__dirname, '..', '/fonts/Roboto-Regular.ttf'),
            bold: path.join(__dirname, '..', '/fonts/Roboto-Medium.ttf'),
            italics: path.join(__dirname, '..', '/fonts/Roboto-Italic.ttf'),
            bolditalics: path.join(__dirname, '..', '/fonts/Roboto-MediumItalic.ttf')
        }
    };
    const printer = new PdfPrinter(fontDescriptors);
    var doc = printer.createPdfKitDocument(pdfDoc);

    var chunks = [];
    var result;

    doc.on('data', function (chunk) {
        chunks.push(chunk);
    });
    doc.on('end', function () {
        //result = Buffer.concat(chunks);
        //callback('data:application/pdf;base64,' + result.toString('base64'));
        callback(Buffer.concat(chunks));
    });
    doc.end();

}

const run = (req, res) => {
    const QRCode = require('qrcode');

    QRCode.toDataURL('https://example.com', function (err, url) {
        console.log(url)
    });

    var docDefinition = {
        content: [
            'First paragraph',
            'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines'
        ]
    };

    createPdfBinary(docDefinition, (binary) => {
        var fs = require('fs');
        var wstream = fs.createWriteStream('basics.pdf')
        wstream.write(binary);
        wstream.end();
        res.send('SUCCESS');
    }, (error) => {
        res.send('ERROR:' + error);
    });
};

module.exports = {run};
