const Kereta = require("../models").kereta;
const Type = require("../models").typekereta;

exports.addTiket = async (req, res) => {
  try {
    const data = await Kereta.create(req.body);
    res.send({
      data
    });
  } catch (error) {
    res.status(401).send({
      msg: "error"
    });
  }
};

exports.tickets = async (req, res) => {
  try {
    const dateStart = req.query.param1;
    console.log(req.query.param1);

    const data = await Kereta.findOne({
      where: { dateStart },
      atributes: [
        {
          model: Type
        }
      ]
    });
    console.log(dateStart);
    if (data) res.send({ data });
    // else res.send({ dateStart: q });
  } catch (error) {
    res.status(401).send({
      msg: error.message
    });
  }
};

exports.allTiket = (req, res) => {
  Kereta.findAll({
    include: [
      {
        model: Type,
        attributes: ["id", "name"]
      }
    ]
  }).then(data => {
    if (data) {
      res.send(data);
    }
  });
};
