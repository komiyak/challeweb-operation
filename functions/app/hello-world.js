'use strict';

const run = (req, res) => {
    res.send('Hello World!' + ', env:' + process.env.SAMPLE);
};

module.exports = {run};
