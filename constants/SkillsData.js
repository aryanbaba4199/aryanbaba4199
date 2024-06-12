import { AiFillHtml5 } from "react-icons/ai";
import {
  SiNodedotjs,
  SiNextdotjs,
  SiVercel,
  SiNetlify,
  SiExpress,
  SiRedux,
  SiTailwindcss,
  SiDocker,
  SiSqlite,
  SiCloudinary,
  SiLinux,
  SiElastic,
  SiSupabase,
  SiJenkins,
  SiAmazon,
  SiFirebase,
  SiTypescript,
  SiMaterialdesign,
  SiJquery,
  SiThealgorithms
} from "react-icons/si";

import { DiJavascript1, DiReact, DiMongodb, DiSass } from "react-icons/di";
import { BsGit, BsGithub } from "react-icons/bs";
import { FaBootstrap, FaCss3Alt, FaAngular, FaPhp, FaShopify, FaJava, FaPython, FaCreativeCommonsSamplingPlus } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";

export const TechStackData = [
  {
    Frameworks : [
      {
        name: "ReactJS",
        icon: <DiReact className="md:text-4xl text-2xl" color="#53c1de" />,
      },   
      {
        name: "Next JS",
        icon: <SiNextdotjs className="md:text-4xl text-2xl" color="#29b6f6" />,
      },
      
      
      {
        name: "NodeJS",
        icon: <SiNodedotjs className="md:text-4xl text-2xl" color="#4caf50" />,
      },
      {
        name: "ExpressJs",
        icon: <SiExpress className="md:text-4xl text-2xl" color="#555555" />,
      },
      {
        name: "React Native",
        icon: <TbBrandReactNative className="md:text-4xl text-2xl" color="#66dbfb" />
      },
      {
        name: "jQuery",
        icon: <SiJquery className="md:text-4xl text-2xsl" color="#106dae" />
      },
      {
        name : 'Flask',
        icon: <FaPython className="md:text-4xl text-2xl" color="#ffcd33" />
      }
      
    ],
    Languages: [
      {
        name: "HTML5",
        icon: <AiFillHtml5 className="md:text-4xl text-2xl" color="#fa6700" />,
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt className="md:text-4xl text-2xl" color={"#039be5"} />,
      },
      {
        name: "JavaScript",
        icon: <DiJavascript1 className="md:text-4xl text-2xl" color="#ffd600" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="md:text-4xl text-2xl" color="#377cc8" />
      },
      {
        name: "Python",
        icon: <FaPython className="md:text-4xl text-2xl" color="#ffcd33" />
      },
      {
        name: "JAVA",
        icon: <FaJava className="md:text-4xl text-2xl"/>
      },
      {
        name: "SQL",
        icon: <SiSqlite className="md:text-4xl text-2xl"/>
      },
     
      
      
      
      
      

    ],
    Libraries: [
      

      {
        name: "Redux-toolkit",
        icon: <SiRedux className="md:text-4xl text-2xl" color="#7e57c2" />,
      },
      
      {
        name: "Supabase",
        icon: <SiSupabase className="md:text-4xl text-2xl" color="#7e57c2" />,
      },
      {
        name: "firebase",
        icon: <SiFirebase className="md:text-4xl text-2xl" color="#ffcd33" />
      },
      {
        name: "Material UI",
        icon: <SiMaterialdesign className="md:text-4xl text-2xl" color="#673ab7" />,
      },
      {
        name: "Bootstrap",
        icon: <FaBootstrap className="md:text-4xl text-2xl" color="#673ab7" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="md:text-4xl text-2xl" color="#4caf50" />,
      },
      
      
      
      {
        name: "SASS",
        icon: <DiSass className="md:text-4xl text-2xl" color="#f06292" />,
      },
      
      {
        name: "RestApi",
        icon: <FaCreativeCommonsSamplingPlus className="md:text-4xl text-2xl" color="#99c14f" />
      }
    ],
    Others : [ 
      {
        name: "Git",
        icon: <BsGit className="md:text-4xl text-2xl" color="#f4511e" />
      },
     
      {
        name: "Github",
        icon: <BsGithub className="md:text-4xl text-2xl" color="#c9d1d9" />
      },
      {
        name: "Linux",
        icon: <SiLinux className="md:text-4xl text-2xl" color="#c9d1d9" />
      },
      {
        name: "Elastic Stack",
        icon: <SiElastic className="md:text-4xl text-2xl" color="#c9d1d9" />
      },
      {
        name: "Docker",
        icon: <SiDocker className="md:text-4xl text-2xl" color="#c9d1d9" />
      },
      {
        name: "Jenkins",
        icon: <SiJenkins className="md:text-4xl text-2xl" color="#c9d1d9" />
      },
      {
        name: "AWS",
        icon: <SiAmazon className="md:text-4xl text-2xl" color="#c9d1d9" />
      },
      
      
      {
        name : "DSA" ,
        icon : <SiThealgorithms className="md:text-4xl text-2xl" color="#4caf50" />
      },
      
      {
        name: "Vercel",
        icon: <SiVercel className="dark:text-white text-black md:text-4xl text-2xl" />
      },
      {
        name: "netlify",
        icon: <SiNetlify className="md:text-4xl text-2xl" color={"#31b5ba"} />
      },
    ], 
    Database : [
      {
        name: "MongoDB",
        icon: <DiMongodb className="md:text-4xl text-2xl" color="#4caf50" />,
      },
      {
        name: "MySQL",
        icon: <GrMysql className="md:text-4xl text-2xl" color="#08668e" />
      },
      {
        name: "Cloudinary",
        icon: <SiCloudinary className="md:text-4xl text-2xl" color="#08668e" />
      },
      
    ],
    

  }
]