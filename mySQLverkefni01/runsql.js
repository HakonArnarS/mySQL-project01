const mysql = require('mysql');
const password = require('./secret/donotread.js');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : password,
    database : 'myfirst'
});
connection.connect();
console.log("code in global scope of module");

const runSQL = query=>{
    connection.query(query, function (error, results, fields) {
        if (error) throw error;
        console.log(results);
    });
}

module.exports = runSQL;