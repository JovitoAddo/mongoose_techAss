const mongoose = require("mongoose")

const coursesSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true,
        minLength : 1,
        maxLength : 50
    },
    description:{
        type: String,
        minLength: 1,
        maxLength: 500,
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