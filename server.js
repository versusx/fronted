"use strict";

const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
   var html = fs.readFileAsync('index.html', 'utf-8');
   res.end(html);
}).listen(process.env.PORT);

console.log("Serer started");
