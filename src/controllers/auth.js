const { verify } = require("jsonwebtoken");

exports.verify = (req, res, next) => {
  const jwt = req.cookies.jwt;
  if (jwt) {
    verify(jwt, process.env.SECRET, (err, jwt) => {
      if (err) {
        res.send("Fail");
      } else {
        req.auth="auth";
        info = {
          userId: jwt.userId,
          user_name: jwt.user_name
        };
        req.jwtinfo = info ;
        next();
      }
    });
  } else {
    res.redirect("/login");
  }
};
