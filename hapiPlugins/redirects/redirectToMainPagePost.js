'use strict';

exports.plugin = {
    name: 'redirectToMainPagePost',
    version: '1.0.0',
    register: async function (server, options) {
        server.route({
            method: 'POST',
            path: '/redirectToMainPage',
            handler: function (request, h) {
                console.log(request.payload)
                console.log(request)
                const response = h.response('Hi, YLD!');
                response.code(302);
                response.header('Content-Type', 'text/plain');
                response.header('location', '/');
                return response;
            }
        });
    }
};