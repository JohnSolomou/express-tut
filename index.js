var express = require("express");
var bodyParser = require("body-parser");
var multer = require("multer");
var upload = multer();
var app = express();
let path = require("path");

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/jobapplication", (req, res) => {
  let sFirstName = req.query.empFirst;
  let sLastName = req.query.empLast;
  console.log(req.query);
  res.send("hello from job app");
});
app.post("/jobapplication", (req, res) => {
  console.log(req);
  res.send("hello from job app");
});
app.set("view engine", "pug");
app.set("views", "./views");

// for parsing application/json

// for parsing application/xwww-
app.use(express.urlencoded({ extended: true }));
//form-urlencoded

// for parsing multipart/form-data

//whenever a static file is requested look in public folder
app.use(express.static(__dirname + "/public"));

app.post("/", function (req, res) {
  console.log(req.body);
  res.send("received your request!");
});
app.listen(3000);

// var express = require("express");
// var app = express();
// var things = require("./things.js");

// app.set("view engine", "pug");
// app.set("views", "./views");
// app.use("/things", things);
// app.use(express.static(__dirname + "/public"));
// app.get("/", function (req, res) {
//   res.send("Hello world!");
// });
// app.post("/hello", function (req, res) {
//   res.send("You just called the post method at '/hello'!\n");
// });
// app.get("/first_template", function (req, res) {
//   res.render("first_view");
// });
// // app.get("/:id", function (req, res) {
// //   res.send("The id you specified is " + req.params.id);
// // });
// app.get("/static_file_test", function (req, res) {
//   res.render("static_file_test");
// });
// app.get("/dynamic_view", function (req, res) {
//   res.render("dynamic", {
//     user: { name: "Johh", age: "40" },
//   });
// });
// res.render("dynamic", {
//   name: "TutorialsPoint",
//   url: "http://www.tutorialspoint.com",
// });
// app.get("/components", function (req, res) {
//   res.render("CONTENT");
// });
// //Simple request time logger
// app.use(function (req, res, next) {
//   console.log("A new request received at " + Date.now());

//   //This function call is very important. It tells that more processing is
//   //required for the current request and is in the next middleware function route handler.
//   next();
// });
// //Middleware function to log request protocol
// app.use("/things", function (req, res, next) {
//   console.log("A request for things received at " + Date.now());
//   next();
// });
