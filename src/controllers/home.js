const { getCars } = require("../database/queries/getCars");
const addcar = require("../database/queries/addCar");

exports.get = (req, response,next) => {
  getCars()
    .then(res => {
      response.render("home", { js: "home", res, name: req.jwtinfo.user_name });
    })
    .catch(err => next(err));
};

exports.post = (req, response, next) => {
  const data = req.body;
  const title = data.name;
  const image_url = data.image_url;
  const description = data.description;
  const price = data.price;
  const user_id = req.jwtinfo.userId;
  if (title && image_url && description && user_id && price) {
    addcar(title, description, user_id, price, image_url)
      .then(res => {
        response.redirect("/home");
      })
      .catch(err => {
        next(err);
      });
  }
};
