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
app.post("/create-item", (req, res) => {
    // console.log(req.body);
    // res.json({ test: "succes"});
});

app.get("/", function(req, res) {
    res.render('harid')
});

const http = require("http")
const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The server is running successfully on port: ${PORT}`)
});

