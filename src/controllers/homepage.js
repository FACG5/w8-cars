const displayHome = require('../database/queries/getdata');
exports.get = (req, res, next) => {
  displayHome()
    .then(result => {
      const cars = result.rows;
      res.render('homepage', {js: 'home',cars})
    }).catch(err => {next(err);})
}
