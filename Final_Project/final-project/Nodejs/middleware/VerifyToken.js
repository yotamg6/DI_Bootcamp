import jwt from "jsonwebtoken";

export const VerifyToken = (req, res, next) => {
  const accessToken =
    req.cookies.accessToken ||
    req.headers["x-access-token"] ||
    req.headers["autorisation"]; //the nav bar doesnt show if I take off the headers (the dogprofile shows). But const access token equals to the cookie, no? does it matter what we write inside the array? it doesnt match the headers in the auth

  if (accessToken == null) return res.sendStatus(401);
  jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, decode) => {
    if (err) return res.sendStatus(403);
    let email = decode.email;
    let userName = decode.userName;
    next();
  });
};
