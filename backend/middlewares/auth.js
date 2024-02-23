import { catchAsyncError } from "./catchAsyncError";
import ErrorHandler from "./error.js";
import { Jwt } from "jsonwebtoken";
import { User } from "../models/userSchema.js";

 export const isAuthorized = catchAsyncError(async(req,res,next) => {
   const {token} =req.cookies;
   if(!token) {
    return next(new ErrorHandler("User not authorized", 400));
   }
   const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
   
   req.User = await User.findById(decoded.id);
   next();
 }) ;