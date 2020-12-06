const path = require('path');
const helmet = require('helmet') // creates headers that protect from attacks (security)
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bcrypt = require("bcrypt");
const saltRounds = 10;  // allows/disallows cross-site communication

// const path = require("path");
const nodemailer = require("nodemailer");

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 


const db = mysql.createPool({
  host: "vrk7xcrab1wsx4r1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "kfxrdtx1rv27ldd5",
  password: "m7xsrdbcpylcmygd",
  database: "hwm4rhnfhqiuliah",
});


// --> Add this
// ** MIDDLEWARE ** //
// const whitelist = ['http://localhost:3000', 'http://localhost:8080']
// const corsOptions = {
//   origin: function (origin, callback) {
//     console.log("** Origin of request " + origin)
//     if (whitelist.indexOf(origin) !== -1 || !origin) {
//       console.log("Origin acceptable")
//       callback(null, true)
//     } else {
//       console.log("Origin rejected")
//       callback(new Error('Not allowed by CORS'))
//     }
//   },
//   methods: ["GET", "POST", "PUT"],
//   credentials: true
// }

app.use(helmet())
// --> Add this
// app.use(cors(corsOptions));

app.use(
  cors({
    origin: ["http://localhost:8080"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());


app.use(
  session({
    key: "userID",
    secret: "dansljardin",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 60 * 30,
    },
  })
);



////////////////////////////////////// NEW STUFF ///////////////////////////////////////////////////

function sendEmail(type, firstName, lastName, email) {
  let output = ``;
  if (type === 1) {
  output = `
    <p>We are pleased to offer you our service!</p>
    <h4>${firstName} ${lastName}</h4>
    <p>Please let us know if you would like to update any details</p>
  `;
  }
  if (type === 2) {
    output = `
    <h4>You Have Received a New Order Request!</h4>
    <p>Log into your dashboard to find out more</p>
    `
  }
  if (type === 3) {
    output = `
    <h4>Your Order Has Been Accepted!</h4>
    <p>Keep your schedule clear, a delightful experience awaits you</p>
    `
  }

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    service:'gmail',
    auth: {
      user: "tedxabbotsford@gmail.com", // generated ethereal user
      pass: "C^f8$oB70bOEjg8yr&!WzIVXNScnmcQ^WiSU!ryasUgCqjPxOC", // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Dans L`Jardin" <tedxabbotsford@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "Thank You For Ordering!", // Subject line
    text: "Hello world", // plain text body
    html: output, // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    // console.log("Message sent: %s", info.messageId);
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  });
}

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

app.get("/logout", (req, res) => {
  if (req.session.user) {
    req.session.user = "";
    res.send({loggedIn: false, user: ""})
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
    "INSERT INTO ordering_table (status, gift, occasion, type, number_musicians, suprise, firstName, lastName, date_service, time_service, offered, number, email, address, city, state, zip, comments) VALUES ('Pending', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
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
      orderCity,
      orderState,
      orderZip,
      orderComments,
    ],
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        console.log("Created New Order");
        sendEmail(1, orderFirstName, orderLastName, orderEmail);
        console.log("Sent Email to:", orderFirstName, orderLastName);
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
  const musicianIban = req.body.musicianEtransfer;
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
  const sun  = req.body.sunday;
  const date_time = req.body.date_time

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
  const musicianEmail = req.body.musicianEmail;

  const sqlInsert =
    "INSERT INTO musician_orders (orderID, musicianID) VALUES (?, ?)";
  db.query(sqlInsert, [orderID, musicianID], (err, result) => {
    if (err) {
      console.log(err)
    } else {
      console.log("-> Succesfully Added Order")
      sendEmail(2, "", "", musicianEmail);
      console.log("Sent Email to:", musicianEmail);
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

  const sqlGet = "SELECT ot.*, musician_orders.status as musicianStatus FROM ordering_table as ot INNER JOIN musician_orders ON ot.id = musician_orders.orderID WHERE musician_orders.musicianID = ?;";
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

  const numberMusicians = req.body.musicianNumber;
  const etransfer = req.body.musicianEtransfer;
  const postalCode = req.body.musicianPostalCode;
  const province = req.body.musicianProvince;
  const city = req.body.musicianCity;


  // const group = req.body.musicianGroup;
  const sqlUpdate = "UPDATE musician_table SET firstName = ?, lastName = ?, phone = ?, email = ?, address = ?, training = ?, number_musicians = ?, iban = ?, postalCode = ?, province = ?, city = ? WHERE id = ?";
  db.query(sqlUpdate, [
    firstName,
    lastName,
    phone,
    email,
    address,
    training,
    numberMusicians,
    etransfer,
    postalCode,
    province,
    city,
    id
  ], (err, result) => {
    if (err) {
      console.log(err)
    } else {
      console.log("Succesfully Updated")
    }
  });
});

app.put("/musicianSchedule/update", (req, res) => {
  const id = req.body.musicianID;
  const mon = req.body.monday;
  const tues = req.body.tuesday;
  const wed = req.body.wednesday;
  const thurs = req.body.thursday;
  const fri = req.body.friday;
  const sat = req.body.saturday;
  const sun = req.body.sunday;



  // const group = req.body.musicianGroup;
  const sqlUpdate = "UPDATE musician_table SET monday = ?, tuesday = ?, wednesday = ?, thursday = ?, friday = ?, saturday = ?, sunday = ? WHERE id = ?";
  db.query(sqlUpdate, [
    mon,
    tues,
    wed,
    thurs,
    fri,
    sat,
    sun,
    id
  ], (err, result) => {
    if (err) {
      console.log(err)
    } else {
      console.log("Succesfully Updated")
    }
  });
});


app.put("/order/update", (req, res) => {
  const id = req.body.orderID;
  const firstName = req.body.orderFirstName;
  const lastName = req.body.orderLastName;
  const phone = req.body.orderNumber;
  const email = req.body.orderEmail;
  const address = req.body.orderAddress;
  const date = req.body.orderDate;
  const time = req.body.orderTime;
  // const group = req.body.musicianGroup;
  const sqlUpdate = "UPDATE ordering_table SET firstName = ?, lastName = ?, number = ?, email = ?, address = ?, date_service = ?, time_service = ? WHERE id = ?";
  db.query(sqlUpdate, [
    firstName,
    lastName,
    phone,
    email,
    address,
    date,
    time,
    id
  ], (err, result) => {
    if (err) {
      console.log(err)
    } else {
      console.log("Succesfully Updated")
    }
  });
});

app.put("/orderStatus/update", (req, res) => {
  const id = req.body.orderID;
  const status = req.body.status;

  // const group = req.body.musicianGroup;
  const sqlUpdate = "UPDATE ordering_table SET status = ? WHERE id = ?";
  db.query(sqlUpdate, [
    status,
    id
  ], (err, result) => {
    if (err) {
      console.log(err)
    } else {
      console.log("Succesfully Updated")
    }
  });
});

app.put("/musicianOrders/update", (req, res) => {
  const id = req.body.orderID;
  const musicianID = req.body.musicianID;
  const status = req.body.status;
  const comment = req.body.comment;
  const orderEmail = req.body.orderEmail;

  // const group = req.body.musicianGroup;
  const sqlUpdate = "UPDATE musician_orders SET status = ?, comment = ? WHERE orderID = ? AND musicianID = ?";
  db.query(sqlUpdate, [
    status,
    comment,
    id,
    musicianID
  ], (err, result) => {
    if (err) {
      console.log(err)
    } else {
      console.log("Succesfully Updated")
      if (orderEmail !== "") {
        sendEmail(3, "", "", orderEmail);
      }
    }
  });
});

app.get("/match/musicians/:orderID", (req, res) => {
  const id = req.params.orderID;

  const sqlGet = "SELECT musician_table.* FROM ordering_table, musician_table WHERE ordering_table.id = ? AND ordering_table.city = musician_table.city";
  db.query(sqlGet, id, (err, result) => {
    res.send(result);
  });
});

app.delete('/order/delete/:orderID', (req, res) => {
  const orderID = req.params.orderID;

  const sqlDelete = "DELETE FROM ordering_table WHERE id = ?";

  db.query(sqlDelete, orderID, (err, result) => {
    if (err) console.log(err)
    if (result) console.log("Order", orderID, "deleted");
  });
});

app.delete('/musician/delete/:musicianID', (req, res) => {
  const musicianID = req.params.musicianID;

  const sqlDelete = "DELETE FROM musician_table WHERE id = ?";

  db.query(sqlDelete, musicianID, (err, result) => {
    if (err) console.log(err)
    if (result) console.log("Musician", musicianID, "deleted");
  });
});






// --> Add this
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

const PORT = process.env.PORT || 8080
app.listen(PORT, (req, res) => {
    console.log(`server listening on port: ${PORT}`)
  });
