const express = require("express");
require("express-group-routes");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

//init bodyParser
const bodyParser = require("body-parser");

//define the server port
const port = process.env.PORT || 3900;

//allow this app to receive incoming json request
app.use(bodyParser.json());

// const tes = app.get("/", (req, res) => {
//   res.send("Hello Express");
// });
const { authenticated } = require("./middleware");
const authController = require("./controller/auth");
const addTiket = require("./controller/addTicket");
const user = require("./controller/user");
const kereta = require("./controller/kereta");
const type = require("./controller/typekereta");
const order = require("./controller/order");

app.group("/api/v1", router => {
  router.post("/login", authController.login);
  router.post("/register", authController.store);
  router.post("/addTicket", authenticated, addTiket.add);
  router.get("/cekuser", authenticated, user.cekUser);

  // router.post("/addTypekereta", authenticated, type.addTypekereta);
  router.get("/type", type.type);

  router.post("/addTiket", authenticated, kereta.addTiket);
  // router.get("/tikets", kereta.tickets);

  router.post("/order", authenticated, order.order);

  router.get("/allTiket", kereta.allTiket);

  router.get("/get-order", authenticated, order.getOrder);
});

app.listen(port, () => console.log(`listening on port ${port}!`));
