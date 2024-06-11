import React, { useState } from "react";
import { Dialog } from "@mui/material";
import LocalAuth from "./auth/localAuth";
import FireAuth from "./auth/fireAuth";
import SupaAuth from "./auth/supabaseAuth";
import { useRouter } from "next/router";


const Feature = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [fire, setFire] = useState(false);
  const [supa, setSupa] = useState(false);
  const [weather, setWeather] = useState(false);
  const [localAuth, setLocAuth] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const fireAuth = () => {
    setOpen(false);
    setFire(true);
  };

  const localHandler = () => {
    setOpen(false);
    setLocAuth(true);
  };

  const supaHandler = () => {
    setOpen(false);
    setSupa(true);
  };

  

  const handlePayment = async () => {
    router.push("https://razorpay.me/@stylers");
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center px-2 py-8 border mx-8">
        <div>
          <p className="font-serif font-bold text-3xl">Features</p>
        </div>
       
          <div className="grid md:grid-cols-3 grid-cols-1 md:gap-16 gap-8 text-xl py-8">
            <p
              onClick={handleOpen}
              className="shadow-lg shadow-red-600 px-8 rounded-lg hover:cursor-pointer hover:translate-y-2 hover:transition hover:ease-in-out hover:shadow-purple-600 py-4 bg-slate-950"
            >
              Authentication
            </p>
            <p
              onClick={handlePayment}
              className="shadow-lg shadow-red-600 px-8 rounded-lg hover:cursor-pointer hover:translate-y-2 hover:transition hover:ease-in-out hover:shadow-purple-600 py-4 bg-slate-950"
            >
              Payment gateway
            </p>
            
     
        </div>
      </div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <div className="bg-black text-white px-24 py-8 rounded-lg flex flex-col justify-center items-center">
          <p className="font-semibold text-3xl">Select Auth Type</p>
          <p
            onClick={fireAuth}
            className="mt-4 bg-purple-800 text-center py-1 w-44 font-serif hover:shadow-purple-600 hover:bg-black hover:transition hover:ease-in-out hover:translate-y-1 hover:cursor-pointer rounded-md shadow-red-600 shadow-lg text-xl"
          >
            Firebase Auth
          </p>
          <p
            onClick={supaHandler}
            className="mt-4 bg-purple-800 text-center py-1 w-44 font-serif hover:shadow-purple-600 hover:bg-black hover:transition hover:ease-in-out hover:translate-y-1 hover:cursor-pointer rounded-md shadow-red-600 shadow-lg text-xl"
          >
            Supabase Auth
          </p>
          <p
            onClick={localHandler}
            className="mt-4 bg-purple-800 text-center py-1 w-44 font-serif hover:shadow-purple-600 hover:bg-black hover:transition hover:ease-in-out hover:translate-y-1 hover:cursor-pointer rounded-md shadow-red-600 shadow-lg text-xl"
          >
            Local Auth
          </p>
        </div>
      </Dialog>
      <Dialog open={fire} onClose={() => setFire(false)}>
        <FireAuth setFire={setFire} />
      </Dialog>
      <Dialog open={supa} onClose={() => setSupa(false)}>
        <SupaAuth setSupa={setSupa} />
      </Dialog>
      <Dialog open={localAuth} onClose={() => setLocAuth(false)}>
        <LocalAuth setLocAuth={setLocAuth} />
      </Dialog>
      
    </>
  );
};

export default Feature;
