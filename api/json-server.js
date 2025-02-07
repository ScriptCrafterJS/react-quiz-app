const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./data/questions.json"); // Your JSON data file
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

// Export handler to Vercel
module.exports = (req, res) => {
  server.handle(req, res);
};
