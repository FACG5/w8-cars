const test = require("tape");
const request = require("supertest");
const app = require("../src/app");
const runDbBuild = require("../src/database/db_build");
const { getCars } = require("../src/database/queries/getCars");
const addUser = require("../src/database/queries/adduser");
const { checkUser } = require("../src/database/queries/checkuser");
const displayCar = require("../src/database/queries/getcar");
const addCar = require("../src/database/queries/getcar");

test("Test for the getCars", t => {
  runDbBuild((err, res) => {
    t.notOk(err);
    getCars()
      .then(response => {
        t.equal(res.length > 0, true, "There is data in the getCars");
      })
      .catch(err => t.error(err));
    t.end();
  });
});

test("Test for the addUser", t => {
  runDbBuild((err, res) => {
    t.notOk(err);
    addUser("lubnaaa", "lllmm@aaaa.nnan", "123456789aaa")
      .then(response => {
        t.equal(res.length > 0, true, "There is data in the addUser");
      })
      .catch(err => t.error(err));
    t.end();
  });
});

test("Test for the checkUser", t => {
  runDbBuild((err, res) => {
    t.notOk(err);
    checkUser("a@gmail.com", "111i")
      .then(response => {
        t.equal(res.length > 0, true, "There is data in the checkUser");
      })
      .catch(err => t.error(err));
    t.end();
  });
});

test("Test for the addCar", t => {
  runDbBuild((err, res) => {
    t.notOk(err);
    addCar(123, "hhhh", "Audi sport", 2, "70000$", "som url")
      .then(response => {
        t.equal(res.length > 0, true, "There is data in the addCar");
      })
      .catch(err => t.error(err));
    t.end();
  });
});

test("Test for the displayCar", t => {
  runDbBuild((err, res) => {
    t.notOk(err);
    displayCar(1)
      .then(response => {
        t.equal(res.length > 0, false, "There is data in the displayCar");
      })
      .catch(err => t.error(err));
    t.end();
  });
});

test.onFinish(() => process.exit(0));
