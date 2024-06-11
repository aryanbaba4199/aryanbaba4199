import React, {useState} from "react";
import { Star } from "@mui/icons-material";
import axios from "axios";
import { Dialog } from "@mui/material";

const input = () => {
  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [open, setOpen] = useState(false);  


  const handleClick = (ratingValue) => {
    setRating(ratingValue);
  };

  const handleSubmit = async() =>{
    try{
        const res = await axios.post('/api/feedback/feedback', {name, rating, feedback});
        if(res){
            setOpen(true);
        }  
    }catch(e){
        console.error("Error submitting", e);
    };
  }

  return (
    <div className="flex flex-col px-4 justify-center items-center w-[100%] mt-8">
      <h2 className="text-2xl font-serif flex gap-2">
        I hope you will understand the importance of
        <p className="text-cyan-400">Feedback</p>
      </h2>
      <div className="flex py-1 rounded-sm mt-4 w-16 h-16 -translate-x-10">
          {Array.from({ length: 5 }, (v, idx) => idx + 1).map((star) => (
            <Star
              key={star}
              className={`h-8 w-8 cursor-pointer active:w-12 active:animate-spin active:h-12 ${
                star <= rating ? "text-yellow-400" : "text-gray-400"
              }`}
              onClick={() => handleClick(star)}
            />
          ))}
        </div>
      <div className="flex md:flex-row flex-col justify-center items-center gap-16">
        <input
          className="bg-zinc-200 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-rose-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-2 shadow-md focus:shadow-lg focus:shadow-rose-400 dark:shadow-md dark:shadow-purple-500"
          
          placeholder="Enter Your Name..."
          name="text"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          type="text"
        />
        

        <input
          className="bg-zinc-200 focus:w-96 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-rose-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-2 shadow-md focus:shadow-lg focus:shadow-rose-400 dark:shadow-md dark:shadow-purple-500"
          
          placeholder="Your Feedback"
          name="text"
          type="text"
          value={feedback}
          onChange={(e)=>setFeedback(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit} className="bg-cyan-600 text-white px-4 py-1 rounded-md mt-8 active:bg-white active:text-blue-600 font-semibold hover:shadow-lg active:shadow-green-600 hover:shadow-cyan-400">Submit</button>
    
     <Dialog open = {open} onClose={()=>setOpen(false)}>
            <div className="px-16 py-8 flex justify-center items-center gap-4 flex-col">
                <h2 className="text-2xl bg-slate-900 text-white px-4 py-1 rounded-md">Thanks you {name}</h2>
                <p>Your Feedback will show in Testimonial Section</p>
                <button className="bg-cyan-600 text-white px-8 py-1 rounded-md active:bg-white active:text-blue-600 font-semibold hover:shadow-lg active:shadow-green-600 hover:shadow-cyan-400" onClick={()=>setOpen(false)}>Ok</button>

            </div>
     </Dialog>
    </div>
   
  );
};

export default input;
