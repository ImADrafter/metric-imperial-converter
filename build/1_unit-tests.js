"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _chai = _interopRequireWildcard(require("chai"));

var _convertHandler = require("../server/controllers/convertHandler");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
 *
 *
 *       FILL IN EACH UNIT TEST BELOW COMPLETELY
 *       -----[Keep the tests in the same order!]----
 *       (if additional are added, keep them at the very end!)
 */
// !It seems that FCC test running is failing. Try the unit testing in here: https://pricey-hugger.glitch.me/
var assert = _chai["default"].assert;
(0, _chai.suite)("Unit Tests", function () {
  (0, _chai.suite)("Function convertHandler.getNum(input)", function () {
    (0, _chai.test)("Whole number input", function (done) {
      var input = "32L";
      assert.equal((0, _convertHandler.getNum)(input), 32);
      done();
    });
    (0, _chai.test)("Decimal Input", function (done) {//done();
    });
    (0, _chai.test)("Fractional Input", function (done) {//done();
    });
    (0, _chai.test)("Fractional Input w/ Decimal", function (done) {//done();
    });
    (0, _chai.test)("Invalid Input (double fraction)", function (done) {//done();
    });
    (0, _chai.test)("No Numerical Input", function (done) {//done();
    });
  });
  (0, _chai.suite)("Function getUnit(input)", function () {
    (0, _chai.test)("For Each Valid Unit Inputs", function (done) {
      var input = ["gal", "l", "mi", "km", "lbs", "kg", "GAL", "L", "MI", "KM", "LBS", "KG"];
      input.forEach(function (ele) {//assert
      });
      done();
    });
    (0, _chai.test)("Unknown Unit Input", function (done) {//done();
    });
  });
  (0, _chai.suite)("Function getReturnUnit(initUnit)", function () {
    (0, _chai.test)("For Each Valid Unit Inputs", function (done) {
      var input = ["gal", "l", "mi", "km", "lbs", "kg"];
      var expect = ["l", "gal", "km", "mi", "kg", "lbs"];
      input.forEach(function (ele, i) {
        assert.equal((0, _convertHandler.getReturnUnit)(ele), expect[i]);
      });
      done();
    });
  });
  (0, _chai.suite)("Function spellOutUnit(unit)", function () {
    (0, _chai.test)("For Each Valid Unit Inputs", function (done) {
      //see above example for hint
      done();
    });
  });
  (0, _chai.suite)("Function convert(num, unit)", function () {
    (0, _chai.test)("Gal to L", function (done) {
      var input = [5, "gal"];
      var expected = 18.9271;
      assert.approximately((0, _convertHandler.convert)(input[0], input[1]), expected, 0.1); //0.1 tolerance

      done();
    });
    (0, _chai.test)("L to Gal", function (done) {//done();
    });
    (0, _chai.test)("Mi to Km", function (done) {//done();
    });
    (0, _chai.test)("Km to Mi", function (done) {//done();
    });
    (0, _chai.test)("Lbs to Kg", function (done) {//done();
    });
    (0, _chai.test)("Kg to Lbs", function (done) {//done();
    });
  });
});