import { connectDb } from "@/database/connect";
import User from "@/models/user";

export default async function handler(req, res) {
    connectDb();

    if (req.method === 'POST') {
        const { name, email, password } = req.body;
        try {
            const existingUser = await User.findOne({ email: email });
            if (existingUser) {
                return res.status(400).json({ success: false, message: "User Already Exists" });
            }
            const user = await User.create({ name, email, password });
            return res.status(201).json({ success: true, message: "User Created Successfully", user });
        } catch (error) {
            return res.status(500).json({ success: false, message: error.message });
        }
    }

    if (req.method === 'GET') {
        const { email, password } = req.query;
        try {
            const user = await User.findOne({ email: email, password: password });
            if (!user) {
                return res.status(404).json({ success: false, message: "User not found" });
            }
            return res.status(200).json({ success: true, message: "User found", user });
        } catch (error) {
            return res.status(500).json({ success: false, message: error.message });
        }
    }

    return res.status(405).json({ success: false, message: "Method Not Allowed" });
}
