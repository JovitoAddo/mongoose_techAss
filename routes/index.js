const express = require('express');
const router = express.Router()

const instructorRouter = require("./instructor-routes")
const participantsRouter = require("./participants-routes")
const coursesRouter = require("./courses-routes")

router.get("/", (req, res) => {
  res.json("selamat datang di mongo atlas");
});

router.use("/instructors", instructorRouter)
router.use("/participants", participantsRouter)
router.use("/courses", coursesRouter)



module.exports = router