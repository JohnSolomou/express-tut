var express = require("express");
var app = express();
var things = require("./things.js");
app.set("view engine", "pug");
app.set("views", "./views");
app.use("/things", things);
app.get("/", function (req, res) {
  res.send("Hello world!");
});
app.post("/hello", function (req, res) {
  res.send("You just called the post method at '/hello'!\n");
});
app.get("/first_template", function (req, res) {
  res.render("first_view");
});
// app.get("/:id", function (req, res) {
//   res.send("The id you specified is " + req.params.id);
// });
app.get("/dynamic_view", function (req, res) {
  res.render("dynamic", {
    user: { name: "Johh", age: "40" },
  });
});
// res.render("dynamic", {
//   name: "TutorialsPoint",
//   url: "http://www.tutorialspoint.com",
// });
app.get("/components", function (req, res) {
  res.render("CONTENT");
});
//Simple request time logger
app.use(function (req, res, next) {
  console.log("A new request received at " + Date.now());

  //This function call is very important. It tells that more processing is
  //required for the current request and is in the next middleware function route handler.
  next();
});
//Middleware function to log request protocol
app.use("/things", function (req, res, next) {
  console.log("A request for things received at " + Date.now());
  next();
});

app.listen(3000);
