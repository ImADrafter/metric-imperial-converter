"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _express = _interopRequireDefault(require("express"));

var _api = _interopRequireDefault(require("./routes/api"));

var _fcctesting = _interopRequireDefault(require("./routes/fcctesting"));

var _testRunner = _interopRequireDefault(require("./test-runner"));

var _customEnv = _interopRequireDefault(require("custom-env"));

var _helmet = _interopRequireDefault(require("helmet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import { expect } from "chai";
// eslint-disable-next-line import/no-unresolved
_customEnv["default"].env();

var app = (0, _express["default"])();
app.use((0, _helmet["default"])());
app.use("/public", _express["default"]["static"](process.cwd() + "/public"));
app.use((0, _cors["default"])({
  origin: "*"
})); //For FCC testing purposes only

app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
})); //Index page (static HTML)

app.route("/").get(function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
}); //For FCC testing purposes

(0, _fcctesting["default"])(app); //Routing for API

(0, _api["default"])(app); //404 Not Found Middleware

app.use(function (req, res, next) {
  res.status(404).type("text").send("Not Found");
}); //Start our server and tests!

app.listen(process.env.PORT || 3000, function () {
  console.log("\n  Listening on port ".concat(process.env.PORT, "\n  "));

  if (process.env.NODE_ENV === "test") {
    console.log("Running Tests...");
    setTimeout(function () {
      try {
        _testRunner["default"].run();
      } catch (e) {
        var error = e;
        console.log("Tests are not valid:");
        console.log(error);
      }
    }, 1500);
  }
});
var _default = app; //for testing

exports["default"] = _default;