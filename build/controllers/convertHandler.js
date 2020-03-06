"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getString = exports.convert = exports.spellOutUnit = exports.getReturnUnit = exports.getUnit = exports.getNum = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var splitDigitAndUnitRegex = /\W*(\d+\.*\d*)\W*(\w+)/;

var round = function round(value, decimals) {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
};

var refineInput = function refineInput(input) {
  var refinedInput = input.match(splitDigitAndUnitRegex);

  var _refinedInput = _slicedToArray(refinedInput, 3),
      inputNumber = _refinedInput[1],
      unit = _refinedInput[2];

  return {
    inputNumber: !isNaN(inputNumber) ? inputNumber : "invalid number",
    unit: unit.toLowerCase()
  };
};

var getNum = function getNum(input) {
  return refineInput(input).inputNumber;
};

exports.getNum = getNum;

var getUnit = function getUnit(input) {
  return refineInput(input).unit;
};

exports.getUnit = getUnit;
var conversionMap = {
  gal: {
    conversionUnit: "l",
    spell: "gallons",
    conversion: function conversion(number) {
      return round(number * 3.78541, 5);
    }
  },
  l: {
    conversionUnit: "gal",
    spell: "liters",
    conversion: function conversion(number) {
      return round(number / 3.78541, 5);
    }
  },
  lbs: {
    conversionUnit: "kg",
    spell: "librers",
    conversion: function conversion(number) {
      return round(number * 0.453592, 5);
    }
  },
  kg: {
    conversionUnit: "lbs",
    spell: "kilograms",
    conversion: function conversion(number) {
      return round(number / 0.453592, 5);
    }
  },
  mi: {
    conversionUnit: "km",
    spell: "milles",
    conversion: function conversion(number) {
      return round(number * 1.60934, 5);
    }
  },
  km: {
    conversionUnit: "mi",
    spell: "kilometers",
    conversion: function conversion(number) {
      return round(number / 1.60934, 5);
    }
  }
};

var getReturnUnit = function getReturnUnit(initUnit) {
  return conversionMap[initUnit] ? conversionMap[initUnit].conversionUnit : "invalid unit";
};

exports.getReturnUnit = getReturnUnit;

var spellOutUnit = function spellOutUnit(unit) {
  return conversionMap[unit] ? conversionMap[unit].spell : "invalid unit";
};

exports.spellOutUnit = spellOutUnit;

var convert = function convert(initNum, initUnit) {
  var _ref = conversionMap[initUnit] || {
    conversion: function conversion() {
      return "invalid unit";
    }
  },
      conversion = _ref.conversion;

  return conversion(initNum);
};

exports.convert = convert;

var getString = function getString(initNum, initUnit, returnNum, returnUnit) {
  return {
    initNum: initNum,
    initUnit: initUnit,
    returnNum: returnNum,
    returnUnit: returnUnit,
    string: "".concat(initNum, " ").concat(conversionMap[initUnit] ? conversionMap[initUnit].spell : "invalid unit", " converts to ").concat(returnNum, " ").concat(conversionMap[returnUnit] ? conversionMap[returnUnit].spell : "invalid unit")
  };
}; // `Has introducido ${initNum} en ${initUnit}. Tu respuesta es ${returnNum} en ${returnUnit}`;


exports.getString = getString;