const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Password',
    database: 'musician'
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.get('/', (req, res) => {
//     // const sqlInsert = "INSERT INTO musician_table (name, type) VALUES ('Trump', 'bad')"
//     // const musicians = [
//     //     {id: 1, firstName: 'John', lastName: 'Doe'},
//     //     {id: 2, firstName: 'Mary', lastName: 'Goe'},
//     //     {id: 3, firstName: 'Dame', lastName: 'Dalla'},
//     // ];
//     // db.query(sqlInsert, (err, result) => {
//     //     res.json(musicians);
//     // })
// });


app.get("/api/get", (req, res) => {
    const sqlSelect = "SELECT * FROM musician_table";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    }); 
});

app.get("/order/get", (req, res) => {
    const sqlSelect = "SELECT * FROM ordering_table";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    }); 
});

app.post("/api/insert", (req, res)=> {
    const musicianName = req.body.musicianName;
    const musicianType = req.body.musicianType;

    const sqlInsert = "INSERT INTO musician_table (name, type) VALUES (?, ?)"
    db.query(sqlInsert, [musicianName, musicianType], (err, result)=> {
        console.log(result);
    }); 
});


app.post("/order/insert", (req, res)=> {
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

    const sqlInsert = "INSERT INTO ordering_table (gift, occasion, type, number_musicians, suprise, firstName, lastName, date_service, time_service, offered, number, email, address, address_2, city, state, zip, comments) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
    db.query(sqlInsert, [
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
        orderComments
    ],
         (err, result)=> {
        console.log(result);
        console.log(err);
    }); 
});

app.get("/order/get", (req, res) => {
    const sqlSelect = "SELECT * FROM ordering_table";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    }); 
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));