import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import { Jwt } from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please provide your name!"],
        minLength: [3, "Name must contain at least 3 character!"],
        maxLength: [30, "Name cannot exceed 30 character!"],
    },
    email: {
        type: String,
        required: [true, "please provide your email!"],
        validate: [validator.isEmail, "please provide a valid email"],
    },
    phone : {
        type: String,
        required: [true, "please provide your phone number"],
    },
    password: {
        type: String,
        required: [true, "please provide your password"],
        minLength: [8, "password must contain at least 8 character!"],
        maxLength: [32, "password cannot exceed 32 character!"],
    },
    role: {
        type: String,
        required: [true, "please provide your role"],
        enum: ["jpb Seeker", "Employer"],
    },
});

   //HASHING THE PASSWORD
   userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) {
        next();
    }
    this.password = await  bcrypt.hash(this.password, 10);
   });

   //COMPARING PASSWORD
   userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
   };

   // GENERATING A JWT TOKEN FON AUTHORIZATION
   userSchema.methods.getJWTToken = function() {
    return jwt.sign({id: this._id}, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRE,
    });
   };