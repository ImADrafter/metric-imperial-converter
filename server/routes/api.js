/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

// const expect = require("chai").expect;
import ConvertHandler from "../controllers/convertHandler.js";

const apiRoutes = app => {
  const convertHandler = new ConvertHandler();

  app.route("/api/convert").get(
    (req, res) => "somthing"
    // const input = req.query.input;
    // const initNum = convertHandler.getNum(input);
    // const initUnit = convertHandler.getUnit(input);
    // const returnNum = convertHandler.convert(initNum, initUnit);
    // const returnUnit = convertHandler.getReturnUnit(initUnit);
    // const toString = convertHandler.getString(
    //   initNum,
    //   initUnit,
    //   returnNum,
    //   returnUnit
    // );

    //res.json
  );
};

export default apiRoutes;
