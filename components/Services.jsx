import React from "react";
import { ServiceData } from "@/constants/ServiceData";

const Services = () => {


  
  return (
    <div
      id="services"
    className=" flex flex-col justify-center items-center px-8">
      <div>
        <h2 className="mt-24 text-center  text-4xl font-bold">
            <span className="border-2 border-black px-4 py-1 rounded-md shadow-sm shadow-black">Services Overview</span>
          
        </h2>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-2 mt-8">
          {ServiceData.map((item, index) => (
            <div
            key={index}
            className="hover:cursor-pointer mt-4 hover:z-50 md:mb-0 mb-4 p-2  flex flex-col gap-5 h-72 justify-center m-auto text-start  bg-blue-500 bg-opacity-10 hover:shadow-2xl 
           rounded-lg hover:transition hover:duration-700 shadow-md shadow-black hover:shadow-black hover:ease-in-out hover:text-black hover:bg-white transform hover:-translate-y-1 hover:scale-110   "
          >
              <p className="text-center text-xl font-bold">
                {item.title.split(" ")[0]}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  {" "}
                  {item.title.split(" ")[1]}{" "}
                </span>
              </p>
              <p className="pt-2 font-sans">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
