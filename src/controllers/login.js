const { checkUser } = require("../database/queries/checkuser");
const bcrypt = require("bcryptjs");
const { sign } = require("jsonwebtoken");
require("env2")("./config.env");

exports.get = (req, res) => {
  res.render("login", { js: "login" });

};


exports.post = (request, response) => {
  const email = request.body.email;
  const password = request.body.password;
  if (email && password) {
    checkUser(email, password)
      .then(res => {
        if (!res[0]) {
          response.render("login", { js: "login", msg: "User Not Found" });
        } else {
          const userDetails = {
            userId: res[0].id,
            user_name: res[0].user_name
          };
          const cookie = sign(userDetails, process.env.SECRET);
          bcrypt.compare(password, res[0].password, (err, res) => {
            if (err) {
              return new Error("Error");
            } else if (res === false) {
              response.render("login", { js: "login", msg: "error password" });
            } else {
              response.cookie("jwt", cookie, { httpOnly: true });
              response.redirect('/');
            }
          });
        }
      })
      .catch(err => response.send(err));
  }
};
