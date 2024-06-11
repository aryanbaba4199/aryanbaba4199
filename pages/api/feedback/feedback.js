import { connectDb } from "@/database/connect";
import Testimonial from "../../../models/testimonial";

export default async function handler(req, res) {
  connectDb();
  if (req.method == "POST") {
    try {
      const { name, rating, feedback } = req.body;
      const testi = new Testimonial({ name, rating, feedback });
      await testi.save();
      res.status(200).json();
    } catch (e) {
      console.error(e.message);
      res.status(500).json();
    }
  }
  if(req.method === 'GET'){
    try {
        const testimonials = await Testimonial.find(); 
        res.status(200).json(testimonials);
      } catch (e) {
        console.error(e.message);
        res.status(500).json({ error: e.message });
      }
  }
}
