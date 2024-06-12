import React, { Fragment, useState, useEffect } from "react";
import { FaLaptopCode } from "react-icons/fa";

import { TechStackData } from "@/constants/SkillsData";
import AOS from "aos";
import "aos/dist/aos.css";



const Skills = () => {

  
  const [skill, setSkill] = useState(TechStackData[0].Frameworks)

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);


  const handleSwitch = (stack) => {
    setSkill(TechStackData[0][stack]);
  };
  return (
    <section id="techStack" className="flex flex-col justify-center items-center mt-8 my-8 " data-aos ='fade-up' data-aos-duration = '500'>
        <div className="flex gap-2 ">
            <FaLaptopCode className="text-4xl mt-1"/>
            <h2 className="text-4xl font-bold">Tech Stacks</h2>
        </div>
        <div className="flex mt-4 flex-wrap justify-center items-center">
          <button onClick={()=>handleSwitch("Frameworks")} className="bg-cyan-600 px-4 py-2 text-white rounded-sm focus:bg-white focus:text-cyan-600 focus:border-cyan-600 border-2 active:bg-blue-600 active:text-white font-semibold w-36  ">Frameworks</button>
          <button onClick={()=>handleSwitch('Languages')} className="bg-cyan-600 px-4 py-2 text-white rounded-sm focus:bg-white focus:text-cyan-600 focus:border-cyan-600 border-2 active:bg-blue-600 active:text-white font-semibold w-36  ">Languages</button>
          <button onClick={()=>handleSwitch('Libraries')} className="bg-cyan-600 px-4 py-2 text-white rounded-sm focus:bg-white focus:text-cyan-600 focus:border-cyan-600 border-2 active:bg-blue-600 active:text-white font-semibold w-36  ">Libraries</button>
          <button onClick={()=>handleSwitch('Others')} className="bg-cyan-600 px-4 py-2 text-white rounded-sm focus:bg-white focus:text-cyan-600 focus:border-cyan-600 border-2 active:bg-blue-600 active:text-white font-semibold w-36  ">DevOps</button>
          <button onClick={()=>handleSwitch('Database')} className="bg-cyan-600 px-4 py-2 text-white rounded-sm focus:bg-white focus:text-cyan-600 focus:border-cyan-600 border-2 active:bg-blue-600 active:text-white font-semibold w-36  ">Database</button>
        </div>
        <div className="mt-4 grid md:grid-cols-4 grid-cols-2 items-center gap-4" data-aos ='zoom-in-up' data-aos-duration='2000'>
            {skill.map((item)=>(
              <>
                <div className="flex justify-center items-center gap-2 mt-2 border-2 p-4 hover:bg-slate-950 hover:shadow-lg hover:shadow-cyan-500 hover:border-purple-600 border-slate-900 text-white">
                  {item.icon}
                  <p>{item.name}</p>
                </div>
              </>
            ))}
        </div>
    </section>
  )
}

export default Skills;
