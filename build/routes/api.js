"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _convertHandler = require("../controllers/convertHandler");

/*
 *
 *
 *       Complete the API routing below
 *
 *
 */
// const expect = require("chai").expect;
var apiRoutes = function apiRoutes(app) {
  app.route("/api/convert").get(function (req, res) {
    var input = req.query.input;
    var initNum = (0, _convertHandler.getNum)(input);
    var initUnit = (0, _convertHandler.getUnit)(input);
    var returnNum = (0, _convertHandler.convert)(initNum, initUnit);
    var returnUnit = (0, _convertHandler.getReturnUnit)(initUnit);
    var toString = (0, _convertHandler.getString)(initNum, initUnit, returnNum, returnUnit);
    res.json(toString);
  });
};

var _default = apiRoutes;
exports["default"] = _default;