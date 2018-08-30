const {getCars} = require("../database/queries/getCars");

exports.get = (req, response, next) => {
  getCars()
    .then(res => {
      response.render("homepage", { js: "home", res });
    })
    .catch(err => {
      next(err);
    });
};
