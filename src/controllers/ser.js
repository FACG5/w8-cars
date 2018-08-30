const { search } = require("../database/queries/search");

exports.post = (req, response) => {
  const data = req.body;
  const title = data.title;
  search(title)
    .then(res => {
       
        response.render("homepage", { js: "home", res, auth:req.cookies.jwt});
  
    })
    .catch(err => {
      response.send("error");
      console.log(err);
    });
};
