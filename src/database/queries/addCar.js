const dbconnection = require("../db_connection");

const addCar = (title, description, user_id, price, img_car) =>
  new Promise((resolve, reject) => {
    let sql = {
      text:
        "INSERT INTO car (title,description,user_id,price,img_car) VALUES ($1, $2, $3,$4,$5) ;",
      values: [title, description, user_id, price, img_car]
    };
    dbconnection.query(sql, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
module.exports = addCar;
