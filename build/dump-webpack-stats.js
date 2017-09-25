const clientConfig = require('../webpack.config')({platform: 'prod'})[0];
const webpack = require('webpack');
const fs = require('fs');

const handleResult = (err) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
};

webpack(clientConfig).run((err, wbStats) => {
    handleResult(err);
    const stats = wbStats.toJson();
    fs.writeFile('./dist/webpack.stats.json', JSON.stringify(stats, undefined, 2), handleResult);
});
