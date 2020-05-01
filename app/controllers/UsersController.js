let index = (req, res) => {
  return res.render("users/index");
}

let login = (req, res) => {
  var data = {
    email : req.body.email,
    password : req.body.password
  };
  return res.render("users/login", data);
}


module.exports = {
  index: index,
  login: login
}