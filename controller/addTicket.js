const model = require("../models");

const train = model.kereta;

exports.add = (req, res) => {
  const {
    name_train,
    id_type,
    dateStart,
    startStation,
    startTime,
    destinationStation,
    arivalTime,
    price,
    qty
  } = req.body;

  const addTiket = {
    name_train,
    id_type: id_type.id,
    dateStart,
    startStation,
    startTime,
    destinationStation,
    arivalTime,
    price,
    qty
  };

  train
    .create(addTiket)
    .then(tiket => {
      if (tiket) {
        res.send({
          message: "success add ticket"
        });
      }
    })
    .catch(err => {
      return res.send({
        message: err.message
      });
    });
};
