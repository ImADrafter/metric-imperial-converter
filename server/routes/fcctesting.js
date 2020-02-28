/*
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *       DO NOT EDIT THIS FILE
 *       For FCC testing purposes!
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

"use strict";

import cors from "cors";
import runner from "../test-runner";

export default function(app) {
  app.route("/_api/server.js").get((req, res, next) => {
    console.log("requested");
    fs.readFile(__dirname + "/server.js", (err, data) => {
      if (err) return next(err);
      res.send(data.toString());
    });
  });
  app.route("/_api/routes/api.js").get((req, res, next) => {
    console.log("requested");
    fs.readFile(__dirname + "/routes/api.js", (err, data) => {
      if (err) return next(err);
      res.type("txt").send(data.toString());
    });
  });
  app.route("/_api/controllers/convertHandler.js").get((req, res, next) => {
    console.log("requested");
    fs.readFile(__dirname + "/controllers/convertHandler.js", (err, data) => {
      if (err) return next(err);
      res.type("txt").send(data.toString());
    });
  });

  let error;
  app.get(
    "/_api/get-tests",
    cors(),
    (req, res, next) => {
      console.log(error);
      if (!error && process.env.NODE_ENV === "test") return next();
      res.json({ status: "unavailable" });
    },
    (req, res, next) => {
      if (!runner.report) return next();
      res.json(testFilter(runner.report, req.query.type, req.query.n));
    },
    (req, res) => {
      runner.on("done", report => {
        process.nextTick(() =>
          res.json(testFilter(runner.report, req.query.type, req.query.n))
        );
      });
    }
  );
  app.get("/_api/app-info", (req, res) => {
    const hs = Object.keys(res._headers).filter(
      h => !h.match(/^access-control-\w+/)
    );
    const hObj = {};
    hs.forEach(h => {
      hObj[h] = res._headers[h];
    });
    delete res._headers["strict-transport-security"];
    res.json({ headers: hObj });
  });
}

function testFilter(tests, type, n) {
  let out;
  switch (type) {
    case "unit":
      out = tests.filter(t => t.context.match("Unit Tests"));
      break;
    case "functional":
      out = tests.filter(
        t => t.context.match("Functional Tests") && !t.title.match("#example")
      );
      break;
    default:
      out = tests;
  }
  if (n !== undefined) {
    return out[n] || out;
  }
  return out;
}