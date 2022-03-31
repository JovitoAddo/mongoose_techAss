const express = require('express');
const router = express.Router()

const instructorRouter = require("./instructor-routes")

router.get("/", (req, res) => {
  res.json("selamat datang di mongo atlas");
});

router.use("/instructors", instructorRouter)


module.exports = router