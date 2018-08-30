const dbconnection = require("../db_connection");

const search = (title) =>
  new Promise((resolve, reject) => {
    const sql = {
      text: `SELECT * FROM car WHERE title LIKE $1`,
      values: ['%'+title+'%']
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
    search
};