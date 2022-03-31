const mongoose = require("mongoose")

const ParticipantsSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
        min : 1,
        max : 50
    },
    dateOfBirth:{
        type: Date,
        require: true
    },
    email:{
        type: String,
        max: 50
    },
    phone:{
        type: Number,
        max: 13
    },
    courses:[{
        type: mongoose.Types.ObjectId
    }]
})

const Participants = mongoose.model("participants", ParticipantsSchema, "participants")
module.exports = Participants