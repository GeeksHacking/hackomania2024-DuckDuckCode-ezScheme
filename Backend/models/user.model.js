import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName :{
        type: String,
        require: true 
    },
    lastName :{
        type: String,
        require: true 
    },
    userName :{
        type: String,
        require: true,
        unique: true 
    },
    password :{
        type: String,
        require: true,
        minlength: 6 
    },
    gender :{
        type: String,
        require: true,
        enum: ["male", "female"] 
    },
    profilePic: {
        type: String,
        default:""
    },

    additionalInfo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AdditionalInfo' // Reference to additional information schema
    }
},{timestamps: true}); 

const User = mongoose.model	("User", userSchema);

export default User;