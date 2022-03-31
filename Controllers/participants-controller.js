const {Participants} = require("../Models/participants-model")

module.exports = {
    getAll: async (req,res) =>{
        const participants = await Participants.find({})

        try{
            res.json({
                message: "Data Participants",
                data: participants
            })
        } catch(error){
            res.status(400).send(error)
        }
    },
    getAllById : async (req,res) => {
        const participants = await Participants.findById(req.params.id)

        try{
            res.json({
                message: "Data Participants Menurut ID",
                data: participants
            })
        } catch(error){
            res.status(400).send(error)
        }
    },
    postParticipants : async (req,res) =>{
        const data = req.body

        try{
            await Participants.create(data)
            res.json({
                message: "Berhasil input data",
                data: 1
            })
        } catch(error){
            res.status(400).send(error)
        }
    },
    updateParticipants: async(req, res)=>{
        const participants = await Participants.findById(req.params.id)
        const data = req.body
        try{
            await Participants.updateOne({_id: req.params.id}, data), 
            res.json({
                message: "Data has been updated",
                data: instructor
            })
        }catch(error){
            console.log(error)
            res.status(400).send(error)
        }
    },
    deleteParticipants: async(req,res)=>{
        const participants = await Participants.findById(req.params.id)
        try{
            await Participants.deleteOne({_id: req.params.id})
            res.json({
                message: "Data has been deleted"
            })
        }catch(error){
            console.log(error)
            res.status(400).send(error)
        }
    }
}
