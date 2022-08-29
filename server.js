const http = require('http');

const server = http.createServer((req, res) => {
    console.log('run request ...')
    res.setHeader('Content-Type', 'text/html');
    res.write('<h2>Hello world! </h2>');
    res.write('<h3>Hello!</h3>');
    res.end();
})

server.listen(2002, 'localhost', () => {
    console.log('Node.JS server is running on port: 2002');
})