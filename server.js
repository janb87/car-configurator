const express = require('express');
const fs = require('fs');
const clientConfig = require('./webpack.config')({platform: 'prod'})[0];
const webpack = require('webpack');

const app = express();

const loadWebpackStats = (done) => {
    webpack(clientConfig).run((err, wbStats) => {
        stats = wbStats.toJson();
        done(err, stats);
    });
};

app.use(express.static(__dirname + '/dist'));

loadWebpackStats((err, stats) => {
    if (err) {
        console.error('Unable to start application due to an error.', err);
        return;
    }

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
});

