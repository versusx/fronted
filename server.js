"use strict";

const http = require('http');

http.cggitgitreateServer(function (req, res) {
   res.end();
}).listen(process.env.PORT);

console.log("Serer started");
