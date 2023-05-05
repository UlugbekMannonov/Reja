console.log("Web Serverni Boshlash");
const express = require("express");
const app = express();

// 1. Kirish codelari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2. Session codes

// 3. Views code
app.set("views", "views");
app.set("view engine", "ejs");


// 4. Routing code
app.get("/hello", function(req, res) {
    // res.end(`<h1 style="background: red">HELLO WORLD by Ulugbek</h1>`);
    res.end(`<h1>HELLO WORLD</h1>`);
});
app.get("/gift", function(req, res) {
    // res.end(`<h1 style="background: red">HELLO WORLD by Ulugbek</h1>`);
    res.end(`<h1>Siz sovgalar bolimidasiz</h1>`);
});


const http = require("http")
const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The server is running successfully on port: ${PORT}`)
});

