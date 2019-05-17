'use strict';

exports.helloWorld = (req, res) => {
    res.send('Hello World!' + ', env:' + process.env.SAMPLE);
};
