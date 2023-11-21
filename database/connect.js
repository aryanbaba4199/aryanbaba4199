import mongoose from "mongoose"

export const connectDb = async () => {

    try {
        await mongoose.connect("mongodb+srv://aryanbaba4199:Aryan7277@cluster0.fjkctxi.mongodb.net/?retryWrites=true&w=majority")
        console.log("Database Connected")

    } catch (error) {
        console.log("Database connection failed", error)
    }
}
