const {User} = require("../models/index")
class UserController{

    static async registerUser(req,res){
        try {
            const {username,email,password} = req.body
            let newUser = await User.create({
                username,email,password
            })
            res.status(201).json(newUser)
        } catch (err) {
            if(err.name === "SequelizeValidationError" || err.name === "SequelizeUniqueConstraintError"){
                res.status(400).json({message:err.errors[0].message})
            }else{
                res.status(500).json(err)
            }
        }
    }
}

module.exports = UserController