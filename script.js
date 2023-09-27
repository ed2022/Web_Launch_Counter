// First we must npm init-> package.json file this acts like a log file
// Then run 'npm install express ave'
// FAKER
const { faker } = require('@faker-js/faker');
// EXPRESS 
const express = require('express');
const app = express();
// MYSQL
const mysql = require('mysql');
const connection = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Stayhumble789',
      database: 'join_us_db' 
    },
    console.log(`Connected to the join_us-db database.`)
);


// EXPRESS 
// Define routes and middleware here
const PORT = 3000; 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", function(req, res){
  let q = "SELECT COUNT(*) AS count FROM users;"
  connection.query(q, function(error, results){
          if(error) throw error; 
          let count = results[0].count;
          res.send("We have " + count + " users in our db!");
  }); 
}); 

// MYSQL 
// const q = 'INSERT INTO users (email, created_at) VALUES ?'; 
// const data = []; 

// for (let i = 0; i < 500; i++) {
//     data.push([
//         faker.internet.email(), 
//         faker.date.past()
//     ])
// }
// console.log(data); 
// This is the connection and query. Error will throw when detected by mysql, results = answer. 
// connection.query(q, [data], function(error, results){
//     if(error) throw error; 
//     console.log(results);
// })
// // This will save us time to not have to click Ctrl + C  


