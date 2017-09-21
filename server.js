const express = require('express');
const fs = require('fs');
const clientConfig = require('./webpack.config')({platform: 'prod'})[0];
const webpack = require('webpack');

const app = express();

let stats;
const loadWebpackStats = (done) => {
    if (stats) {
        done(undefined, stats);
        return;
    }
    webpack(clientConfig).run((err, wbStats) => {
        stats = wbStats.toJson();
        done(err, stats);
    });
};

app.get(['/', '/home', '/summary'], function (req, res) {
    loadWebpackStats((err, stats) => {
        if (err) {
            res.send(err.message);
            return;
        }
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
});

app.use(express.static(__dirname + '/dist'));

app.listen(3000);
