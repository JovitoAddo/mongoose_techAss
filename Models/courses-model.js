const mongoose = require("mongoose")

const coursesSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true,
        min : 1,
        max : 50
    },
    description:{
        type: String,
        min: 1,
        max: 500,
        required: true
    },
    instructor:{
        type: mongoose.Types.ObjectId,
        ref: "instructor",
        required: true
    },
    scheduleDateTime:{
        type: Date,
        required: true
    }
})

const Courses = mongoose.model("courses", coursesSchema, "courses")
module.exports = Courses