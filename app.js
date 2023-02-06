const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const { Http2ServerRequest } = require("http2");
const https = require("https")

const app = express();

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.render(__dirname + "index")
});



app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on Port 3000.")
});
