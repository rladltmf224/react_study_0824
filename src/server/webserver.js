const http = require("http");

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("<h1>im running node!</h1>");
  })
  .listen(52273, function () {
    console.log("Server running at http:127.0.0.1:72273/");
  });
