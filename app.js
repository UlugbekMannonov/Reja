console.log("Web Serverni Boshlash");
const express = require("express");
const app = express();
const fs = require("fs");


// MONGODB chaqirish
const db = require("./server").db();


// let user;
// fs.readFile("database/user.json", "utf8", (err, data) => {
//     if(err) {
//         console.log("ERROR", err);
//     } else {
//         user = JSON.parse(data);
//     }
// });


// 1. Kirish codelari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2. Session codes

// 3. Views code
app.set("views", "views");
app.set("view engine", "ejs");


// 4. Routing code
app.post("/create-item", (req, res) => {
    // console.log(req.body);
    // res.json({ test: "succes"});
});

app.get('/author', (req, res) => {
    res.render("author", { user: user});
});


app.get("/", function(req, res) {
    res.render('reja');
});

// const server = http.createServer(app);
// let PORT = 3000;
// server.listen(PORT, function() {
//     console.log(`The server is running successfully on port: ${PORT}`)
// });

module.exports = app;


