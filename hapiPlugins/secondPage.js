'use strict';

exports.plugin = {
    name: 'routeGetSecondPage',
    version: '1.0.0',
    register: async function (server, options) {
        server.route({
            method: 'GET',
            path: '/secondPage',
            handler: function (request, h) {
                return h.view('secondPage');
            }
        });
    }
};