const dbconnection = require("../db_connection");

const displayHome = () => new Promise((resolve, reject) => {
  let sql = {
    text: "select * FROM car",
  };
  dbconnection.query(sql, (err, res) => {
    if (err) {
      reject(err);
    } else {
      resolve(res);
    }
  });
});
module.exports = displayHome;
