const mongoose = require("mongoose")

const ParticipantsSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
        minLength : 1,
        maxLength : 50
    },
    dateOfBirth:{
        type: Date,
        require: true
    },
    email:{
        type: String,
        maxLength: 50
    },
    phone:{
        type: Number,
        maxLength: 13
    },
    courses:[{
        type: mongoose.Types.ObjectId,
        ref: "courses"
    }]
})

const Participants = mongoose.model("participants", ParticipantsSchema, "participants")
module.exports = Participants