import { RequestHandler } from "express";
import mongoose from "mongoose";
import appAssert from "../utils/appAssert";
import AppErrorCode from "../constants/appErrorCode";
import { UNAUTHORIZED } from "../constants/http";
import { verifyToken } from "../utils/jwt";

// wrap with catchErrors() if you need this to be async
const authenticate: RequestHandler = (req, res, next) => {
  const accessToken = req.cookies.accessToken as string | undefined;
  appAssert(
    accessToken,
    UNAUTHORIZED,
    "Not authorized",
    AppErrorCode.InvalidAccessToken
  );

  const { error, payload } = verifyToken(accessToken);
  appAssert(
    payload,
    UNAUTHORIZED,
    error === "jwt expired" ? "Token expired" : "Invalid token",
    AppErrorCode.InvalidAccessToken
  );

  // Robust type conversion with validation
  req.userId = payload.userId && typeof payload.userId === 'string' 
    ? new mongoose.Types.ObjectId(payload.userId) 
    : undefined;
  req.sessionId = payload.sessionId && typeof payload.sessionId === 'string'
    ? new mongoose.Types.ObjectId(payload.sessionId) 
    : undefined;

  next();
};

export default authenticate;