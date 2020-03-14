/*
 *
 *
 *       FILL IN EACH FUNCTIONAL TEST BELOW COMPLETELY
 *       -----[Keep the tests in the same order!]-----
 *       (if additional are added, keep them at the very end!)
 */

import chaiHttp from 'chai-http';
import chai, { assert } from 'chai';
import { describe, test } from 'mocha';
import server from '../server/server';

chai.use(chaiHttp);

describe('Functional Tests', () => {
  describe('Routing Tests', () => {
    describe('GET /api/convert => conversion object', () => {
      test('Convert 10L (valid input)', done => {
        chai
          .request(server)
          .get('/api/convert')
          .query({ input: '10L' })
          .end((err, res) => {
            assert.equal(res.status, 200);
            assert.equal(res.body.initNum, 10);
            assert.equal(res.body.initUnit, 'L');
            assert.approximately(res.body.returnNum, 2.64172, 0.1);
            assert.equal(res.body.returnUnit, 'gal');
            done();
          });
      });

      test('Convert 32g (invalid input unit)', done => {
        chai
          .request(server)
          .get('/api/convert')
          .query({ input: '32g' })
          .end((err, res) => {
            assert.equal(res.status, 200);
            assert.equal(res.body.initNum, 32);
            assert.equal(res.body.initUnit, 'invalid unit');
            assert.equal(res.body.returnUnit, 'invalid unit');
            done();
          });
      });

      test('Convert 3/7.2/4kg (invalid number)', done => {
        //done();
      });

      test('Convert 3/7.2/4kilomegagram (invalid number and unit)', done => {
        //done();
      });

      test('Convert kg (no number)', done => {
        //done();
      });
    });
  });
});
