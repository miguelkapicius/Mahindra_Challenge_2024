import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();
export function authMiddleware(req, res, next) {
  const {
    authorization
  } = req.headers;
  if (!authorization) return res.status(401).json({
    error: "Token not provided!"
  });
  const [, token] = authorization.split(" ");
  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    const {
      id
    } = decoded;
    req.userId = id;
    next();
  } catch (error) {
    res.status(401).json({
      error: "Invalid token"
    });
  }
}