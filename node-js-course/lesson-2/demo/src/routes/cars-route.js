const carsRoute = (request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>Cars!</h1>");
    response.end();
  };
  
  module.exports = carsRoute;
  