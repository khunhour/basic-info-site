const http = require("http");
const fs = require("fs/promises");

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader("ContentType", "text/html");
	res.end();
});

server.listen(8080);
