
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    pswd : String,
});

mongoose.models = {};
export const User = mongoose.model('User', userSchema);