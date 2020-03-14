/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

// const expect = require("chai").expect;
import {
  getNum,
  getUnit,
  convert,
  getReturnUnit,
  getString
} from '../controllers/convertHandler';

const apiRoutes = app => {
  app.route('/api/convert').get((req, res) => {
    const input = req.query.input;
    const initNum = getNum(input);
    const initUnit = getUnit(input);
    const returnNum = convert(initNum, initUnit);
    const returnUnit = getReturnUnit(initUnit);
    const toString = getString(initNum, initUnit, returnNum, returnUnit);

    res.json(toString);
  });
};

export default apiRoutes;
