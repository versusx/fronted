'use strict';

const http = require('http');

const server = http.CreateServer(function (req, res) {
   res.end();
});

server.listen(process.env.PORT);

console.log("Serer started");
