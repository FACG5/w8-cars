const dbconnection = require("../db_connection");

const getCars = () =>
  new Promise((resolve, reject) => {
    const sql = {
      text: `SELECT * FROM car`
    };
    dbconnection.query(sql, (err, res) => {
      if (err) {
        return reject(err);
      } else {
        resolve(res.rows);
      }
    });
  });
module.exports = {
    getCars
};
