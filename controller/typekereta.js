const Typekereta = require("../models").typekereta;

exports.type = async (req, res) => {
  try {
    const data = await Typekereta.findAll();
    res.send({
      data
    });
  } catch (error) {
    console.log(error.message);
  }
};
