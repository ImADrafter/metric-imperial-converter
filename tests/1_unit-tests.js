/* eslint-disable no-undef */
/*
 *
 *
 *       FILL IN EACH UNIT TEST BELOW COMPLETELY
 *       -----[Keep the tests in the same order!]----
 *       (if additional are added, keep them at the very end!)
 */

// !It seems that FCC test running is failing. Try the unit testing in here: https://pricey-hugger.glitch.me/

import chai from "chai";
const assert = chai.assert;
import {
  getNum,
  getUnit,
  getReturnUnit,
  spellOutUnit,
  convert,
  getString
} from "../server/controllers/convertHandler";

suite("Unit Tests", () => {
  suite("Function convertHandler.getNum(input)", () => {
    test("Whole number input", done => {
      const input = "32L";
      assert.equal(getNum(input), 32);
      done();
    });

    test("Decimal Input", done => {
      //done();
    });

    test("Fractional Input", done => {
      //done();
    });

    test("Fractional Input w/ Decimal", done => {
      //done();
    });

    test("Invalid Input (double fraction)", done => {
      //done();
    });

    test("No Numerical Input", done => {
      //done();
    });
  });

  suite("Function getUnit(input)", () => {
    test("For Each Valid Unit Inputs", done => {
      const input = [
        "gal",
        "l",
        "mi",
        "km",
        "lbs",
        "kg",
        "GAL",
        "L",
        "MI",
        "KM",
        "LBS",
        "KG"
      ];
      input.forEach(ele => {
        //assert
      });
      done();
    });

    test("Unknown Unit Input", done => {
      //done();
    });
  });

  suite("Function getReturnUnit(initUnit)", () => {
    test("For Each Valid Unit Inputs", done => {
      const input = ["gal", "l", "mi", "km", "lbs", "kg"];
      const expect = ["l", "gal", "km", "mi", "kg", "lbs"];
      input.forEach((ele, i) => {
        assert.equal(getReturnUnit(ele), expect[i]);
      });
      done();
    });
  });

  suite("Function spellOutUnit(unit)", () => {
    test("For Each Valid Unit Inputs", done => {
      //see above example for hint
      done();
    });
  });

  suite("Function convert(num, unit)", () => {
    test("Gal to L", done => {
      const input = [5, "gal"];
      const expected = 18.9271;
      assert.approximately(convert(input[0], input[1]), expected, 0.1); //0.1 tolerance
      done();
    });

    test("L to Gal", done => {
      //done();
    });

    test("Mi to Km", done => {
      //done();
    });

    test("Km to Mi", done => {
      //done();
    });

    test("Lbs to Kg", done => {
      //done();
    });

    test("Kg to Lbs", done => {
      //done();
    });
  });
});
