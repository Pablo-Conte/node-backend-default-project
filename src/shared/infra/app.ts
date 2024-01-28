import "reflect-metadata";
import "module-alias/register";
import express, { json, urlencoded } from "express";
import "express-async-errors";
import cors from "cors";
import { Server } from "socket.io";
import { createServer } from "http";
import { router } from "./routes";
import "../container";
import { errorHandler } from "../../utils/errorHandler";

const app = express();

const expressParserLimit = "50mb";

app.use(
  json({ limit: expressParserLimit }),
  urlencoded({ limit: expressParserLimit, extended: true })
);

app.use(cors(), router);

app.use(errorHandler);

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:4000",
    methods: ["GET", "POST"],
  },
});

export { httpServer, io };
