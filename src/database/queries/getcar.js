const dbconnection = require("../db_connection");

const displayCar = (id) => new Promise((resolve, reject) => {
  let sql = {
    text: "select * FROM car where id =$1;",
    values: [id]
  };
  dbconnection.query(sql, (err, res) => {
    if (err) {
      reject(err);
    } else {
      resolve(res);
    }
  });
});
module.exports = displayCar;
