const express = require("express")
const router = express.Router()

const {getAllById,getAll,postParticipants,updateParticipants,deleteParticipants} = require("../Controllers/participants-controller")

router.get("/",getAll)
router.get("/:id",getAllById)
router.post("/",postParticipants)
router.put("/:id",updateParticipants)
router.delete("/:id",deleteParticipants)

module.exports = router