const jwt = require("jsonwebtoken");
const Models = require("../models");
const User = Models.user;

exports.tes = (req, res) => {
  res.send("Hello Express");
};

exports.login = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ where: { username, password } }).then(user => {
    if (user) {
      const token = jwt.sign({ userId: user.id }, "my-secret-key");
      res.send({
        message: "success",
        username,
        status: user.status,
        token
      });
    } else {
      res.send({
        error: true,
        message: "username salah"
      });
    }
  });
};

exports.store = (req, res) => {
  try {
    const {
      name,
      username,
      status,
      email,
      password,
      gender,
      phone,
      address
    } = req.body;

    // const { name, gender, about_pet } = req.body.pet;
    User.findOne({ where: { email } }).then(Email => {
      console.log(password);
      if (!Email) {
        User.create({
          name: name,
          username: username,
          status: 0,
          email: email,
          password: password,
          gender: gender,
          phone: phone,
          address: address
        }).then(user => {
          const token = jwt.sign({ userId: user.id }, "my-secret-key");
          res.status(200).send({
            status: 200,
            message: "success",
            token
          });
        });
      } else {
        res.status(201).send({
          status: 201,
          message: "email is already in use",
          data: req.body
        });
      }
    });
  } catch (error) {
    res.status(400).send({
      status: 400,
      email: "unique",
      password: "unique",
      message: "Bad Request",
      data: req.body
    });
  }
};

// exports.Register =(req,res) => {
// try{
// const{name, username, email, password, gender, phone, address} = req.body

//   User.findOne({where : {email}}).then(Email =>{
//     if(!Email){
//     User.create({
//       name: name,
//       username: username,
//       email: email,
//       password: password,
//       gender: gender,
//       phone: phone,
//       address: address
// }).then()

//     }
//   })
// }
// }

// {
//   name:'suhartono',
//   username: 'suhartono',
//   email:'suhartono@gmail.com',
//   password : 'qwerty',
//   gender: 'male',
//   phone: '083896831233',
//   address: 'Tangerang Selatan'
// }
