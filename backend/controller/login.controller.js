import Login from "../models/login.model.js";

export const loginUser = async (req , res) => {
    const {email , password} = req.body
    try {
        const user = await Login.findOne({email})
        if(!user) {
            return res.status(404).json({message : "User not found"})
        }
        if(password !== user.password) {
            return res.status(404).json({message : "Invalid credentials"})
        }
        res.status(200).json({message: "Login successful" , user: {email: user.email}})
    } catch (error) {
        console.error("Error during login:" , error)
        res.status(500).json({message: "An error occured"})
    }
}