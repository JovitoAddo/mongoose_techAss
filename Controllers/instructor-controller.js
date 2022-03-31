const Instructors = require("../Models/instructor-model");

module.exports = {
    getAllInstructors: async (req,res) =>{
        const instructors = await Instructors.find({});
        try{
            res.json({
                message: "Data Instructor",
                data: instructors
            })
        } catch(error){
            res.status(400).send("error")
        }
    },
    getAllById : async (req,res) => {
        const instructors = await Instructors.findById(req.params.id)

        try{
            res.json({
                message: "Data Instructor Menurut ID",
                data: instructors
            })
        } catch(error){
            res.status(400).send("Failed")
        }
    },
    postInstructors : async (req,res) =>{
        const data = req.body

        try{
            await Instructors.create(data)
            res.json({
                message: "Berhasil input data",
                data: 1
            })
        } catch(error){
            res.status(400).send("failed")
        }
    },
    updateInstructor: async(req, res)=>{
        const instructor = await Instructors.findById(req.params.id)
        const data = req.body
        try{
            await Instructors.updateOne({_id: req.params.id}, data), 
            res.json({
                message: "Data has been updated"
            })
        }catch(error){
            console.log(error)
            res.status(400).send("error")
        }
    },
    deleteInstructor: async(req,res)=>{
        
        try{
            await Instructors.deleteOne({_id: req.params.id})
            res.json({
                message: "Data has been deleted"
            })
        }catch(error){
            console.log(error)
            res.status(400).send("error")
        }
    }
}
