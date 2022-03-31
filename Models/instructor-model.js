const mongoose = require("mongoose")

const instructorSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
        minLength : 1,
        maxLength : 100
    },
    dateOfBirth:{
        type: Date,
        require: true
    },
    location:{
        type: String
    }
})

const Instructors = mongoose.model("instructor", instructorSchema, "instructor")
module.exports = Instructors