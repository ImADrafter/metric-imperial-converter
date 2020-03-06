"use strict";

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _chai = _interopRequireDefault(require("chai"));

var _server = _interopRequireDefault(require("../server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
*
*
*       FILL IN EACH FUNCTIONAL TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]-----
*       (if additional are added, keep them at the very end!)
*/
var assert = _chai["default"].assert;

_chai["default"].use(_chaiHttp["default"]);

suite('Functional Tests', function () {
  suite('Routing Tests', function () {
    suite('GET /api/convert => conversion object', function () {
      test('Convert 10L (valid input)', function (done) {
        _chai["default"].request(_server["default"]).get('/api/convert').query({
          input: '10L'
        }).end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.body.initNum, 10);
          assert.equal(res.body.initUnit, 'L');
          assert.approximately(res.body.returnNum, 2.64172, 0.1);
          assert.equal(res.body.returnUnit, 'gal');
          done();
        });
      });
      test('Convert 32g (invalid input unit)', function (done) {//done();
      });
      test('Convert 3/7.2/4kg (invalid number)', function (done) {//done();
      });
      test('Convert 3/7.2/4kilomegagram (invalid number and unit)', function (done) {//done();
      });
      test('Convert kg (no number)', function (done) {//done();
      });
    });
  });
});