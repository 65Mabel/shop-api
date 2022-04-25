const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  // console.log(req.headers);
  const tokenwithBearer = req.headers.authorization;

  // if there is no token return error to the user
  if (!tokenwithBearer) {
    return res.status(403).json({ error: "Username not authenticated" });
  }
  const token = tokenwithBearer.split("")[1];

  try {
    // verify if the tokenis correct
    const user = jwt.verify(token, "secret");

    // attach the user to the req
    req.user = user;
  } catch (error) {
    return res.status(403).json({ error: "Username not authenticated" });
  }
  // res.status(403).json({error: "Username not authenticated" });

  next();
};

module.exports = {
  verifyToken,
};
