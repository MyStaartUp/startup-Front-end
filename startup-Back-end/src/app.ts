import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";
import corsOptions from "./config/corsOptions";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import connectToDatabase from "./config/db";
import errorHandler from "./middlewares/errorHandler";
import authenticate from "./middlewares/authenticate";
import authRoutes from "./routes/authRoute";
import userRoutes from "./routes/userRoute";
import sessionRoutes from "./routes/sessionRoute";
import { NODE_ENV, PORT } from "./constants/env";

const app = express();

// Security middleware
app.use(helmet());

// add middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors<Request>(corsOptions));
app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100
}));
app.use(cookieParser());

// health check
app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
      status: "healthy",
    });
  });

// auth routes
app.use("/auth", authRoutes);

// protected routes
app.use("/user", authenticate, userRoutes);
app.use("/sessions", authenticate, sessionRoutes);

// error handler
app.use(errorHandler);

app.listen(PORT, async () => {
  console.log(`Server listening on port ${PORT} in ${NODE_ENV} environment`);
  await connectToDatabase();
});
