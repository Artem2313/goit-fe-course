const trainsRoute = (request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>Trains!!!</h1>");
    response.end();
  };
  
  module.exports = trainsRoute;
  