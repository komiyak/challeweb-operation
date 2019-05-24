'use strict';

const path = require('path');
const fs = require('fs');
const PdfPrinter = require('pdfmake');
const QRCode = require('qrcode');
const {Storage} = require('@google-cloud/storage');

const fontDescriptors = {
    Roboto: {
        normal: path.join(__dirname, '..', '/fonts/Roboto-Regular.ttf'),
        bold: path.join(__dirname, '..', '/fonts/Roboto-Medium.ttf'),
        italics: path.join(__dirname, '..', '/fonts/Roboto-Italic.ttf'),
        bolditalics: path.join(__dirname, '..', '/fonts/Roboto-MediumItalic.ttf')
    }
};

const createPdfBinary = (pdfDoc, callback) => {
    let printer = new PdfPrinter(fontDescriptors);
    let doc = printer.createPdfKitDocument(pdfDoc);
    let chunks = [];

    doc.on('data', function (chunk) {
        chunks.push(chunk);
    });
    doc.on('end', function () {
        callback(Buffer.concat(chunks));
    });
    doc.end();
};

const listFiles = async bucketName => {
    const storage = new Storage();
    const [files] = await storage.bucket(bucketName).getFiles();

    console.log(files);
    console.log('Files:');
    files.forEach(file => {
        console.log(file.name);
    });
};

const run = async (req, res) => {
    QRCode.toDataURL('https://example.com', function (err, url) {
        console.log(url)
    });

    var docDefinition = {
        content: [
            'First paragraph',
            'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines'
        ]
    };

    await listFiles('challeweb-operation-yu7scu6l');

    createPdfBinary(docDefinition, (binary) => {
        var wstream = fs.createWriteStream('basics.pdf')
        wstream.write(binary);
        wstream.end();
        res.send('SUCCESS');
    }, (error) => {
        res.send('ERROR:' + error);
    });
};

module.exports = {run};
