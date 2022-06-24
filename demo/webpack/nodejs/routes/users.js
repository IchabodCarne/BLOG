var express = require("express");
var Mock = require("mockjs");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/getUsers", (req, res, next) => {
  const users = Mock.mock({
    "list|1-10": [
      {
        id: Mock.Random.id(),
        name: "@cname",
        email: Mock.Random.email(),
        address: `${Mock.Random.province()}${Mock.Random.city()}${Mock.Random.county()}`,
      },
    ],
  });
  res.send(users);
});

module.exports = router;
