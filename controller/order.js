const Order = require("../models").order;
const Payment = require("../models").payment;
const User = require("../models").user;
const Kereta = require("../models").kereta;
const Typekereta = require("../models").typekereta;

exports.order = async (req, res) => {
  try {
    const { no_invoice, id_tiket, qty, totalPrice } = req.body;

    const payment = {
      qty,
      totalPrice,
      status: "Pending",
      attachment: "bca.jpg"
    };
    const data = await Payment.create(payment);

    const order = {
      no_invoice,
      id_tiket,
      id_user: req.user.userId,
      id_payment: data.id
    };
    const data2 = await Order.create(order);
    res.send({
      msg: "Success"
    });
  } catch (error) {
    res.status(401).send({
      msg: "Error"
    });
  }
};

exports.getOrder = async (req, res) => {
  const id = req.user.id;
  console.log(req.user);

  Order.findAll({
    //    where:{status: true},
    include: [
      {
        model: Kereta,
        attributes: [
          "id",
          "name_train",
          "dateStart",
          "startStation",
          "startTime",
          "destinationStation",
          "arivalTime",
          "price"
        ],
        include: [
          {
            model: Typekereta,
            attributes: ["id", "name"]
          }
        ]
      },
      {
        model: User,
        attributes: [
          "id",
          "name",
          "username",
          "email",
          "gender",
          "phone",
          "address"
        ]
      }
    ]
  })
    .then(getOrderAl => {
      if (getOrderAl) {
        res.send({
          getOrderAl
        });
      }
    })
    .catch(err => {
      return res.status(400).send({
        message: err.message
      });
    });
};
