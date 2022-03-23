import mongoose from 'mongoose'

const UserSchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        mobile:{
            type:Number,
            required:true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
    }
)

const User=mongoose.model('User',UserSchema)
export default User;