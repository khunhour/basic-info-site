const http = require("http");
const fs = require("fs");

const server = http.createServer(async (req, res) => {
	res.setHeader("Content-Type", "text/html");
	console.log(req.url);
	if (req.url === "/") {
		fs.readFile("index.html", "utf8", (error, data) => {
			if (error) {
				console.log(error);
				return;
			}
			res.end(data);
		});
	} else if (req.url === "/contact-me") {
		fs.readFile("contact-me.html", "utf8", (error, data) => {
			if (error) {
				console.log(error);
				return;
			}
			res.end(end);
		});
	} else if (req.url === "/about") {
		fs.readFile("about.html", "utf8", (error, data) => {
			if (error) {
				console.log(error);
				return;
			}
			res.end(end);
		});
	} else {
		res.end("ending");
	}
});

server.listen(8080);
