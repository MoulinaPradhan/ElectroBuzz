
import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'

// @desc  Auth user & get token
// @route  GET /api/users/login
// @acess  Public
const authUser= asyncHandler (async(req,res) =>{
const { email, password } = req.body

const user = await User.findOne({email})
})

export {authUser}