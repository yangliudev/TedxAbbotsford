const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const port = 5000;

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "4255",
  database: "musician",
});

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT"],
    credentials: true,
  })
);

app.use(cookieParser());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userID",
    secret: "dansljardin",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }
    db.query(
      "INSERT INTO users (username, password, role) VALUES (?, ?, 'musician')",
      [username, hash],
      (err, result) => {
        if (err) {
          console.log(err)
        } else {
          console.log("Succesfully Registered")
        }
      }
    );
  });
});

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({loggedIn: true, user: req.session.user})
  } else {
    res.send({loggedIn: false});
  }
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
            req.session.user = result;
            // console.log(req.session.user);
            res.send(result);
            console.log("Sucessfully Logged In");
          } else {
            res.send({ message: "Wrong username/password combination!" });
            // console.log({ message: "Wrong username/password combination!" });
          }
        });
      } else {
        res.send({ message: "User doesn't exist" });
        // console.log({ message: "User doesn't exist" });
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
      if (err) {
        console.log(err)
      } else {
        console.log("Created New Order")
      }
    }
  );
});

app.get("/musician/get", (req, res) => {
  const sqlSelect = "SELECT * FROM musician_table";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.post("/musician/insert", (req, res) => {
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
  const mon  = req.body.monday;
  const tue  = req.body.tuesday;
  const wed  = req.body.wednesday;
  const thu  = req.body.thursday;
  const fri  = req.body.friday;
  const sat  = req.body.saturday;
  const sun  = req.body.sunday

  const sqlInsert =
    "INSERT INTO musician_table (firstName, lastName, address, postalCode, city, province, phone, iban, email, training, instrument, style, number_musicians, site, media,  monday, tuesday, wednesday, thursday, friday, saturday, sunday) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(
    sqlInsert,
    [
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
      musicianMedia,
      mon,
      tue,
      wed,
      thu,
      fri,
      sat,
      sun
    ],

    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        console.log("Sucesfully Inserted Musician")
      }
    }
  );
});

app.post("/musicianOrder/insert", (req, res) => {
  const orderID = req.body.setOrderID;
  const musicianID = req.body.setMusicianID;

  const sqlInsert =
    "INSERT INTO musician_orders (orderID, musicianID) VALUES (?, ?)";
  db.query(sqlInsert, [orderID, musicianID], (err, result) => {
    if (err) {
      console.log(err)
    } else {
      console.log("-> Succesfully Added Order")
    }
  });
});



app.get("/match/musician", (req, res) => {
  var musicianEmail = "Harish@email.com"

  if (req.session.user) {
    musicianEmail = req.session.user[0].username;
    // console.log(req.session.user[0].username);
  }

  // const musicianEmail = req.body.musicianEmail;
  
  // const musicianID = req.body.setMusicianID;

  const sqlGet = "SELECT * FROM musician_table WHERE email = ?";
  db.query(sqlGet, [musicianEmail], (err, result) => {
    res.send(result);
  });
});


app.get("/match/orders/:musicianID", (req, res) => {
  const id = req.params.musicianID;

  // const musicianEmail = req.body.musicianEmail;
  
  // const musicianID = req.body.setMusicianID;

  const sqlGet = "SELECT ot.id, ot.gift, ot.occasion, ot.type, ot.number_musicians, ot.suprise, ot.firstName, ot.lastName, ot.date_service, ot.time_service, ot.offered, ot.number, ot.email, ot.address, ot.address_2, ot.city, ot.state, ot.zip, ot.comments FROM ordering_table as ot INNER JOIN musician_orders ON ot.id = musician_orders.orderID WHERE musician_orders.musicianID = ?";
  db.query(sqlGet, id, (err, result) => {
    res.send(result);
  });
});

app.put("/musician/update", (req, res) => {
  const id = req.body.musicianID;

  const firstName = req.body.musicianFirstName;
  const lastName = req.body.musicianLastName;
  const phone = req.body.musicianPhone;
  const email = req.body.musicianEmail;
  const address = req.body.musicianAddress;
  const training = req.body.musicianTraining;
  // const group = req.body.musicianGroup;
  const sqlUpdate = "UPDATE musician_table SET firstName = ?, lastName = ?, phone = ?, email = ?, address = ?, training = ? WHERE id = ?";
  db.query(sqlUpdate, [
    firstName,
    lastName,
    phone,
    email,
    address,
    training,
    id
  ], (err, result) => {
    if (err) {
      console.log(err)
    } else {
      console.log("Succesfully Updated")
    }
  });
});

app.listen(port, () => console.log(`Server started on port ${port}`));
