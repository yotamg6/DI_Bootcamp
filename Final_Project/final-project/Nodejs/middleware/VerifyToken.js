import jwt from "jsonwebtoken";

export const VerifyToken = (req, res, next) => {
  const accessToken =
    req.cookies.accessToken ||
    req.headers["x-access-token"] ||
    req.headers["autorisation"];

  if (accessToken == null) return res.sendStatus(401);
  jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, decode) => {
    if (err) return res.sendStatus(403);

    next();
  });
};
