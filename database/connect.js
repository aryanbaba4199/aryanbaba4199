import mongoose from "mongoose"

export const connectDb = async () => {

    try {
        await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_CONNECTION_STRING)
        // await mongoose.connect('mongodb://localhost:27017/portfolio');
        console.log("Database Connected")

    } catch (error) {
        console.log("Database connection failed", error)
    }
}
