// pages/api/send-email.js
import nodemailer from "nodemailer";

import { connectDb } from "@/database/connect";
import { Mail } from "@/models/mail";
import Cors from 'micro-cors';

const cors = Cors();    

export default cors(async function handler(req, res) {
    connectDb()
    if (req.method === "POST") {

        const { name, email, subject, message } = req.body;


        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: process.env.FROM_EMAIL_ADDRESS,
                pass: process.env.FROM_EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.FROM_EMAIL_ADDRESS,
            to: process.env.TO_EMAIL_PASS,
            subject,
            text: `name = ${name}, email = ${email}, message = ${message}`
        };

        try {
            await transporter.sendMail(mailOptions);

            
            const mail = await Mail.create(req.body)

            res.status(200).json({ success: true, message: "Email sent successfully", mail });
        } catch (error) {
            console.error("Error sending email:", error);
            res.status(500).json({ error: "An error occurred while sending the email" });
        }
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
})
