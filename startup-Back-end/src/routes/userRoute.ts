import { Router } from "express";
import { getUserHandler } from "../controllers/userController";

const userRoutes = Router();

// prefix: /user
userRoutes.get("/", getUserHandler);

export default userRoutes;
