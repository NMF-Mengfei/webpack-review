/*
 * @Author: niumengfei
 * @Date: 2022-06-16 16:32:16
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-06-16 16:47:20
 */
const http = require('http');

const hostname = 'localhost' || '127.0.0.1';
const port = 8000;

const server = http.createServer((req, res) => {
    console.log(req.url);
    if(req.url === '/api/hello'){
        // res.statusCode = 200;
        // res.setHeader('Content-Type', 'text/plain');
        res.end('Hello, World1!\n');
    }
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    // res.end('Hello, World1!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});