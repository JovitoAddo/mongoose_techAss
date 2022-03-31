const express = require("express")
const router = express.Router()

const {getAllById,getAllInstructors,updateInstructor,deleteInstructor,postInstructors} = require("../Controllers/instructor-controller")

router.get("/",getAllInstructors)
router.get("/:id",getAllById)
router.post("/",postInstructors)
router.put("/:id",updateInstructor)
router.delete("/:id",deleteInstructor)

module.exports = router