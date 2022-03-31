const {Courses} = require("../Models/courses-model")

module.exports = {
    getAll: async (req,res) =>{
        const courses = await Courses.find({})

        try{
            res.json({
                message: "Data Courses",
                data: Courses
            })
        } catch(error){
            res.status(400).send(error)
        }
    },
    getAllById : async (req,res) => {
        const courses = await Courses.findById(req.params.id)

        try{
            res.json({
                message: "Data Courses Menurut ID",
                data: Courses
            })
        } catch(error){
            res.status(400).send(error)
        }
    },
    postCourses : async (req,res) =>{
        const data = req.body

        try{
            await Courses.create(data)
            res.json({
                message: "Berhasil input data",
                data: 1
            })
        } catch(error){
            res.status(400).send(error)
        }
    },
    updateCourses: async(req, res)=>{
        const courses = await Courses.findById(req.params.id)
        const data = req.body
        try{
            await Courses.updateOne({_id: req.params.id}, data), 
            res.json({
                message: "Data has been updated",
                data: courses
            })
        }catch(error){
            console.log(error)
            res.status(400).send(error)
        }
    },
    deleteCourses: async(req,res)=>{
        const courses = await Courses.findById(req.params.id)
        try{
            await Courses.deleteOne({_id: req.params.id})
            res.json({
                message: "Data has been deleted"
            })
        }catch(error){
            console.log(error)
            res.status(400).send(error)
        }
    }
}
