const jwt = require("jsonwebtoken");
const User = require("../models").user;

exports.cekUser = async (req, res) => {
  try {
    const data = await User.findOne({
      where: { id: req.user.userId },
      attributes: ["id", "status", "username", "email", "phone"]
    });
    res.send({
      data
    });
  } catch (error) {
    console.log(error.message);
    // res.status(401).send({
    //   data: "error"
    // });
  }
};
