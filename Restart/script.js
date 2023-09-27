// Before all this, we must "npm init -y", then "npm install express". 

// just by doing "node", that can be treated as the console

const express = require('express');
const app = express();
const port = 3000; // Choose a port for your application

// Define your routes and middleware here
// this must be the port- "http://127.0.0.1:3000/" we do not need the html file in-order to run this. Just need node.js.  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/pizza", function(req, res){
    console.log("Pizza is working!"); 
    res.send("You have reached the pizza page!")
}); 

app.get("/", function(req, res){
    res.send("WELCOME TO THE HOME PAGE!"); 
}); 

app.get("/joke", function(req, res){
    res.send("Knock Knock..."); 
});

app.get("/random_num", function(req, res){
    let num = Math.floor((Math.random() * 10) +1);  
    res.send(`You're lucky number is ${num}`); 
}); 