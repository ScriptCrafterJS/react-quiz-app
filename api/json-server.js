import { createServer } from "json-server";
import path from "path";

const server = createServer();
const router = server.router(path.join(__dirname, "../data/questions.json"));

const handler = (req, res) => {
  server.use(router);
  server.handle(req, res);
};

export default handler;
