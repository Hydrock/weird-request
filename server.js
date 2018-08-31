'use strict';

const myPlugin = require('./hapiPlugins/mainPage.js');
const routeGetSecondPage = require('./hapiPlugins/secondPage.js');

const Path = require('path');
const Hapi = require('hapi');
const Hoek = require('hoek');

const server = Hapi.server({
    port: 3010,
    host: 'localhost'
});

const init = async () => {
    await server.register([myPlugin, require('vision'), routeGetSecondPage]);

    server.views({
        engines: {
            html: require('handlebars')
        },
        relativeTo: __dirname,
        path: './templates'
    });

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();