import { connectDb } from "@/database/connect";
import User from "@/models/user";

export default async function handler(req, res) {
    connectDb();

    if (req.method === 'POST') {
        const { name, email, pswd } = req.body;
        console.log(name, email, pswd);
        try {
            const existingUser = await User.findOne({ email: email });
            console.log(existingUser);
            if (existingUser) {
                return res.status(300).json({ success: false, message: "User Already Exists" });
            }
            
            const user = await new User({ name, email, pswd });
            console.log(user);
            return res.status(200).json({ success: true, message: "User Created Successfully" });
        } catch (error) {
            console.error("Error creating user:", error);
            return res.status(500).json({ success: false, message: error.message }); 
        }
    }

    if (req.method === 'GET') {
        const { email, pswd } = req.query;
        try {
            const user = await User.findOne({ email: email, pswd: pswd });
            if (!user) {
                return res.status(300).json({ success: false, message: "User not found" });
            }
            return res.status(200).json({ success: true, message: "User found", user });
        } catch (error) {
            return res.status(500).json({ success: false, message: error.message });
        }
    }

    return res.status(405).json({ success: false, message: "Method Not Allowed" });
}
