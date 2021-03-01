import mongoose from 'mongoose'

const loginSchema =  mongoose.Schema({
email: {
    type: String,
    required: true,
    unique:true,
}
})

const loginUser = mongoose.model('loginUser',loginSchema)
export default loginUser;