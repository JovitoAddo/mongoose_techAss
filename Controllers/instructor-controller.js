const {Instructor} = require("../Models/instructor-model")

module.exports = {
    getAllInstructors: async (req,res) =>{
        const instructors = await Instructor.find({})

        try{
            res.json({
                message: "Data Instructor",
                data: instructors
            })
        } catch(error){
            res.status(400).send(error)
        }
    },
    getAllById : async (req,res) => {
        const instructors = await Instructor.findById(req.params.id)

        try{
            res.json({
                message: "Data Instructor Menurut ID",
                data: instructors
            })
        } catch(error){
            res.status(400).send(error)
        }
    },
    postInstructors : async (req,res) =>{
        const data = req.body

        try{
            await Instructor.create(data)
            res.json({
                message: "Berhasil input data",
                data: 1
            })
        } catch(error){
            res.status(400).send(error)
        }
    },
    updateInstructor: async(req, res)=>{
        const instructor = await Instructor.findById(req.params.id)
        const data = req.body
        try{
            await Instructor.updateOne({_id: req.params.id}, data), 
            res.json({
                message: "Data has been updated",
                data: instructor
            })
        }catch(error){
            console.log(error)
            res.status(400).send(error)
        }
    },
    deleteInstructor: async(req,res)=>{
        const instructor = await Instructor.findById(req.params.id)
        try{
            await Instructor.deleteOne({_id: req.params.id})
            res.json({
                message: "Data has been deleted"
            })
        }catch(error){
            console.log(error)
            res.status(400).send(error)
        }
    }
}
