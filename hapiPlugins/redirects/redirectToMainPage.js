'use strict';

exports.plugin = {
    name: 'redirectToMainPage',
    version: '1.0.0',
    register: async function (server, options) {
        server.route({
            method: 'GET',
            path: '/redirectToMainPage',
            handler: function (request, h) {
                const response = h.response('Hi, YLD!');
                response.code(302);
                response.header('Content-Type', 'text/plain');
                response.header('location', '/');
                return response;
            }
        });
    }
};