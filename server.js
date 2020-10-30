const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const port = 5000;

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Anantharajah123!",
  database: "musician",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }
    db.query(
      "INSERT INTO users (username, password) VALUES (?, ?)",
      [username, hash],
      (err, result) => {
        console.log(err);
      }
    );
  });
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE username = ?;",
    username,
    (err, result) => {
      if (err) {
        res.send({ err: err });
        console.log({ err: err });
      }
      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            res.send(result);
            console.log(result);
          } else {
            res.send({ message: "Wrong username/password combination!" });
            console.log({ message: "Wrong username/password combination!" });
          }
        });
      } else {
        res.send({ message: "User doesn't exist" });
        console.log({ message: "User doesn't exist" });
      }
    }
  );
});

app.get("/order/get", (req, res) => {
  const sqlSelect = "SELECT * FROM ordering_table";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.post("/order/insert", (req, res) => {
  const orderGift = req.body.orderGift;
  const orderOccasion = req.body.orderOccasion;
  const orderType = req.body.orderType;
  const orderNumberMusicians = req.body.orderNumberMusicians;
  const orderSuprise = req.body.orderSuprise;
  const orderFirstName = req.body.orderFirstName;
  const orderLastName = req.body.orderLastName;
  const orderDateService = req.body.orderDateService;
  const orderTimeService = req.body.orderTimeService;
  const orderOffered = req.body.orderOffered;
  const orderNumber = req.body.orderNumber;
  const orderEmail = req.body.orderEmail;
  const orderAddress = req.body.orderAddress;
  const orderAddress2 = req.body.orderAddress2;
  const orderCity = req.body.orderCity;
  const orderState = req.body.orderState;
  const orderZip = req.body.orderZip;
  const orderComments = req.body.orderComments;
  const sqlInsert =
    "INSERT INTO ordering_table (gift, occasion, type, number_musicians, suprise, firstName, lastName, date_service, time_service, offered, number, email, address, address_2, city, state, zip, comments) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(
    sqlInsert,
    [
      orderGift,
      orderOccasion,
      orderType,
      orderNumberMusicians,
      orderSuprise,
      orderFirstName,
      orderLastName,
      orderDateService,
      orderTimeService,
      orderOffered,
      orderNumber,
      orderEmail,
      orderAddress,
      orderAddress2,
      orderCity,
      orderState,
      orderZip,
      orderComments,
    ],
    (err, result) => {
      console.log(result);
      console.log(err);
    }
  );
});

app.get("/musician/get", (req, res) => {
  const sqlSelect = "SELECT * FROM musician_table";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.post("/musician/insert", (req, res)=> {
  const musicianFirstName = req.body.musicianFirstName;
  const musicianLastName = req.body.musicianLastName;
  const musicianAddress = req.body.musicianAddress;
  const musicianPostalCode = req.body.musicianPostalCode;
  const musicianCity = req.body.musicianCity;
  const musicianProvince = req.body.musicianProvince;
  const musicianPhone = req.body.musicianPhone;
  const musicianIban = req.body.musicianIban;
  const musicianEmail = req.body.musicianEmail;
  const musicianPassword = req.body.musicianPassword;
  const musicianConfirmPassword = req.body.musicianConfirmPassword;
  const musicianTraining = req.body.musicianTraining;
  const musicianOtherTraining = req.body.musicianOtherTraining;
  const musicianInstrument = req.body.musicianInstrument;
  const musicianStyle = req.body.musicianStyle;
  const musicianGroup = req.body.musicianGroup;
  const musicianSite = req.body.musicianSite;
  const musicianMedia = req.body.musicianMedia;


  const sqlInsert = "INSERT INTO musician_table (firstName, lastName, address, postalCode, city, province, phone, iban, email, training, instrument, style, number_musicians, site, media) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
  db.query(sqlInsert, [
      musicianFirstName, 
      musicianLastName, 
      musicianAddress, 
      musicianPostalCode,
      musicianCity,
      musicianProvince,
      musicianPhone,
      musicianIban,
      musicianEmail,
      musicianTraining,
      musicianInstrument,
      musicianStyle,
      musicianGroup,
      musicianSite,
      musicianMedia
  ],

       (err, result)=> {
      console.log(result);
      console.log(err);
  }); 
});


app.listen(port, () => console.log(`Server started on port ${port}`));
