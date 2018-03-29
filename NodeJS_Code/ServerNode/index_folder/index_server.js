let http = require('http');
const port = 3001
;
// tra ve obj Server
const server = http.createServer((request, response) => {
    // Khi server nhan dc request thi tra ve cau text duoi
    //response.write("This is a response for a request !");
    // Ghi vao Header . 200-successful
    response.writeHead(200, {
        'Content-Type': 'text/html',
        'Trailer': 'Content-MD5'
    });
    const ipAddress = request.socket.remoteAddress;
    response.write(`Your IP address is ${ipAddress} \r\n`); ////write a response to the client
    response.write(`Request's url : ${request.url} \r\n`);
    // boc tach url
    response.write(`Detail request's url : ${require('url').parse(request.url, true)} \r\n`);
    //debugger;
    response.addTrailers({'Content-MD5': '7895bf4b8828b55ceaf47747b4bca667'});
    response.end();
}).listen(port);
console.log(`Server is running on port: ${port}.`);