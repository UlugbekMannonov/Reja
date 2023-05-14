const { log } = require("console");
const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = ""

mongodb.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) console.log("ERROR on connection MongoDB");
  else {
    console.log("MongoDb connection succeed");
    module.exports = client;
    const app = require("./app");
    const server = http.createServer(app);
    let PORT = 3000;
    server.listen(PORT, function () {
      console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
    });
  }
});



