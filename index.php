<?php
$v8 = new V8Js();

$v8->setModuleLoader(function($path) {
    if ($path == 'fs' || $path == 'path') {
        return '';
    }

    $fileContent = file_get_contents($path);
    if ($path == 'webpack.stats.json') {
        return 'module.exports = '.$fileContent;
    }
    return $fileContent;
});

try {
    echo $v8->executeString('
        const stats = require(\'webpack.stats.json\');
        const serverRender = require(\'server.js\').default;

        serverRender(stats, \'/\', {
            sideNumber: 13,
            carBrands: []
        });
    ');
} catch (V8JsScriptException $e) {
    echo 'Caught exception: ',  $e->getJsTrace(), "\n", $e->getJsSourceLine(), "\n";
}
