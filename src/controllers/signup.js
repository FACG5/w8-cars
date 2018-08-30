const hashPassword = require('./hashPassword');
const addUser = require('../database/queries/adduser');
exports.get = (req, res) => {
  res.render('signup', {js:'signup' });
};
exports.post=(req,response)=>{
  const data=req.body;
  const user_name=data.user_name;
  const email=data.email;
  const password=data.password;

if (user_name && email&& password) {
hashPassword(password,(err,hash)=>{
  if (err) {
    response.render('signup',{js:'signup' ,msg:"ERROR"})
  }else {
    addUser(user_name,email,hash)
    .then(res=>{
        res.render('login',{js:'login' ,msg:"success sign up"})
    })
    .catch(err=> {
        response.render('signup',{js:'signup' ,msg:"email is already exist"})
      })
  }
})

}}
