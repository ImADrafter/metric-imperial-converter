/*
 *
 *
 *       FILL IN EACH UNIT TEST BELOW COMPLETELY
 *       -----[Keep the tests in the same order!]----
 *       (if additional are added, keep them at the very end!)
 */

// !It seems that FCC test running is failing. Try the unit testing in here: https://pricey-hugger.glitch.me/

import { assert } from 'chai';
import { describe, it } from 'mocha';
import {
  convert,
  getNum,
  getReturnUnit,
  getUnit,
  spellOutUnit
} from '../server/controllers/convertHandler';

describe('Unit Tests', () => {
  describe('Function getNum(input)', () => {
    it('Whole number input', done => {
      const input = '32L';
      const output = getNum(input);
      assert.equal(output, 32);
      done();
    });

    it('Decimal Input', done => {
      const input = '32.6626737292';
      const output = getNum(input);
      assert.equal(output, Number(input).toFixed(5));
      done();
    });

    it('Fractional Input', done => {
      const input = '1/2';
      const output = getNum(input);
      assert.equal(output, 1 / 2);
      done();
    });

    it('Fractional Input w/ Decimal', done => {
      const input = '2.5/2';
      const output = getNum(input);
      assert.equal(output, 2.5 / 2);
      done();
    });

    it('Invalid Input (double fraction)', done => {
      const input = '2.5//2';
      const output = getNum(input);
      assert.equal(output, 'invalid number');
      done();
    });

    it('No Numerical Input', done => {
      const input = 'caca';
      const output = getNum(input);
      assert.equal(output, 'invalid number');
      done();
    });
  });

  describe('Function getUnit(input)', () => {
    it('For Each Valid Unit Inputs', done => {
      const input = [
        'gal',
        'l',
        'mi',
        'km',
        'lbs',
        'kg',
        'GAL',
        'L',
        'MI',
        'KM',
        'LBS',
        'KG'
      ];
      input.forEach(unit => {
        const input = '15' + unit;
        const output = getUnit(input);
        assert.equal(output, unit);
      });
      done();
    });

    it('Unknown Unit Input', done => {
      const input = '18Btg';
      const output = getUnit(input);
      assert.equal(output, 'invalid unit');
      done();
    });
  });

  describe('Function getReturnUnit(initUnit)', () => {
    it('For Each Valid Unit Inputs', done => {
      const input = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];
      const expect = ['l', 'gal', 'km', 'mi', 'kg', 'lbs'];
      input.forEach((ele, i) => {
        assert.equal(getReturnUnit(ele), expect[i]);
      });
      done();
    });
  });

  describe('Function spellOutUnit(unit)', () => {
    it('For Each Valid Unit Inputs', done => {
      const input = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];
      const expect = [
        'gallons',
        'liters',
        'milles',
        'kilometers',
        'pound',
        'kilograms'
      ];
      input.forEach((ele, i) => {
        assert.equal(spellOutUnit(ele), expect[i]);
      });
      done();
    });
  });

  describe('Function convert(num, unit)', () => {
    it('Gal to L', done => {
      const input = [5, 'gal'];
      const expected = 18.9271;
      assert.approximately(convert(input[0], input[1]), expected, 0.1); //0.1 tolerance
      done();
    });

    it('L to Gal', done => {
      const input = [5, 'l'];
      const expected = 1.32086;
      assert.approximately(convert(input[0], input[1]), expected, 0.1); //0.1 tolerance
      done();
    });

    it('Mi to Km', done => {
      const input = [5, 'mi'];
      const expected = 8.04672;
      assert.approximately(convert(input[0], input[1]), expected, 0.1); //0.1 tolerance
      done();
    });

    it('Km to Mi', done => {
      const input = [5, 'km'];
      const expected = 3.10686;
      assert.approximately(convert(input[0], input[1]), expected, 0.1); //0.1 tolerance
      done();
    });

    it('Lbs to Kg', done => {
      const input = [5, 'lbs'];
      const expected = 2.26796;
      assert.approximately(convert(input[0], input[1]), expected, 0.1); //0.1 tolerance
      done();
    });

    it('Kg to Lbs', done => {
      const input = [5, 'kg'];
      const expected = 11.0231;
      assert.approximately(convert(input[0], input[1]), expected, 0.1); //0.1 tolerance
      done();
    });
  });
});
