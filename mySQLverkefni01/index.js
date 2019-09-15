const express = require('express');
const app = express();
const cors = require('cors');
const fetch = require('isomorphic-fetch');
const mysql = require('mysql');
const password = require('./secret/donotread.js');

app.use(cors());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: password,
    database: 'myfirst'
});
connection.connect();
app.get('/', (req, res) => {
    fetch("https://apis.is/flight?language=is&type=departures")
    .then(res => res.json())
    .then(json => {
    //   console.log(json);
    //   json.results.map((flights, i) => {
    //       if (i < 2) return ""
    //     connection.query(`INSERT INTO api (date, flightNumber, toDestination, plannedArrival, realArrival, status) VALUES("${flights.date}", "", "", "", "", "")`, function (error, results, fields) {
    //         if (error) throw error;
    //         console.log('The solution is: ', results);
    //         // res.json(results);
    //     });
    //   })
    })
    // connection.query('CREATE TABLE api (date varchar(255), flightNumber varchar(255), toDestination varchar(255), plannedArrival varchar(255), realArrival varchar(255), status varchar(255))', function (error, results, fields) {
    //     if (error) throw error;
    //     console.log('The solution is: ', results);
    //     res.json(results);
    // });
    // connection.query('INSERT INTO api', function (error, results, fields) {
    //     if (error) throw error;
    //     console.log('The solution is: ', results);
    //     res.json(results);
    // });
    connection.query('SELECT * FROM api', function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        res.json(results);
    });
    
    // connection.end();
})
app.listen("5000", () => {
    console.log("listening to port 5000")
})
console.log('fret')