const express = require('express');
const stats = require('./dist/webpack.stats.json');

const app = express();

app.use(express.static(__dirname + '/dist'));

app.get(['/', '/home', '/summary'], function (req, res) {
    try {
        const serverRender = require('./dist/server.js').default;
        const html = serverRender(stats, req.path, {
            sideNumber: 13,
            carBrands: []
        });
        res.send(html);
    } catch (e) {
        console.log(e);
        res.send(e.message);
    }
});

app.listen(3000);

