const express = require("express")
const router = express.Router()

const {getAll,getAllById,postCourses,updateCourses,deleteCourses} = require("../Controllers/courses-controller")

router.get("/",getAll)
router.get("/:id",getAllById)
router.post("/",postCourses)
router.put("/:id",updateCourses)
router.delete("/:id",deleteCourses)

module.exports = router