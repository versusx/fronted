"use strict";

const http = require('http');

http.createServer(function (req, res) {
   res.end();
}).listen(process.env.PORT);

console.log("Serer started");
