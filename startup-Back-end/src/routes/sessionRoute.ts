import { Router } from "express";
import {
  deleteSessionHandler,
  getSessionsHandler,
} from "../controllers/sessionController";

const sessionRoutes = Router();

// prefix: /sessions
sessionRoutes.get("/", getSessionsHandler);
sessionRoutes.delete("/:id", deleteSessionHandler);

export default sessionRoutes;
