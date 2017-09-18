const express = require('express');
const fs = require('fs');
const {renderHtml} = require('./dist/server');

const app = express();

app.get(['/', '/home', '/summary'], function (req, res) {
    const html = renderHtml(req, {
        sideNumber: 13,
        carBrands: []
    });

    fs.readFile('./dist/index.html', (err, data) => {
        const document = data.toString().replace(/<div id="root"><\/div>/, `<div id="root">${html}</div>`);
        res.send(document);
    });
});

app.use(express.static(__dirname + '/dist'));

app.listen(8080);
