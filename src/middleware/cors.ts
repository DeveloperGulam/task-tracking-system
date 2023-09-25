import { Request, Response, NextFunction } from "express";

const allowLocalhostOnly = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
};

export default allowLocalhostOnly;
