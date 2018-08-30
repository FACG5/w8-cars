const displayCar = require("../database/queries/getcar");

exports.get = (req, res, next) => {
  const { car } = req.params;
  displayCar(car)
    .then(result => {
      const info = result.rows[0];
  res.render("car", { js: "home", info });
    })
    .catch(err => {
      next(err);
    });
};
