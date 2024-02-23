import { catchAsyncError } from "../middlewares/catchAsyncError.js"
import errorHandler from "../middlewares/error.js";
import { User } from "../models/userSchema.js";
export const register = catchAsyncError(async(req,res,next) =>{
const{name,email,phone, role,password} =req.body;
if(!name || !email || phone || !role || !password) {
    return next(new EroorHandler("please fill full registration form!"));
}
const isEmail = await User.findOne({email});
if(isEmail){
    return next(new errorHandler("Email already exists!"));
}

const user = await User.create({
    name,
    email,
    phone,
    role,
    password,
});
res.ststus(200).json({
    success: true,
    message: "User registered!",
    user,
})
});