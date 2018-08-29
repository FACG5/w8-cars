const dbconnection = require("../db_connection");

const addUser = (user_name, email, password) => new Promise((resolve,reject) => {
  let sql = {
    text:
      "INSERT INTO users (user_name, email, password) VALUES ($1, $2, $3) ;",
    values: [user_name, email, password]
  };
  dbconnection.query(sql, (err, res) => {
    
    if (err) {
       reject(err);
    } else {
      resolve(res);
    }
  });
});
module.exports=addUser;
