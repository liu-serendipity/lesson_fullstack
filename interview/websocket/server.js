const http = require('http');
const url = require('url');
const path = require('path');

http.createServer(() => {
    fs.createReadStream(
        path.join(__dirname, 'index.html')
    ).pipe(res);
}).listen(1314);