'use strict';

exports.plugin = {
    name: 'mainPage',
    version: '1.0.0',
    register: async function (server, options) {
        server.route({
            method: 'GET',
            path: '/',
            handler: function (request, h) {
                return h.view('index');
            }
        });
    }
};