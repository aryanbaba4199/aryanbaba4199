import React, { Fragment } from "react";
import Link from "next/link";
import { IoCallSharp } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaInstagramSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiUpwork } from "react-icons/si";
import { SiFiverr } from "react-icons/si";
import { SiFreelancer } from "react-icons/si";


const Footer = () => {
  return (
    <Fragment>
      <>
        <div className="pb-10 md:px-10 px-0">
          <div className="flex justify-center items-center gap-2">
            <p className="text-3xl font-semibold py-4">Contact Me</p>
          </div>
          <div className="grid md:grid-cols-5 grid-cols-2 justify-evenly items-center">
            <div
              className=" flex flex-col justify-center items-center
            shadow-lg shadow-red-600 px-8 py-2  duration-500 mt-4 hover:ease-in-out hover:transform hover:text-3xl hover:text-black hover:bg-white"
            >
              <Link href="tel:+917005742790">
                <IoCallSharp className="text-red-600 text-3xl" />
                <p className="font-semibold my-1">Call Me</p>
              </Link>
            </div>
            <div
              className=" flex flex-col justify-center items-center
            shadow-lg shadow-red-600 px-8 py-2  duration-500 mt-4 hover:ease-in-out hover:transform hover:text-3xl hover:text-black hover:bg-white"
            >
              <Link href="https://www.instagram.com/aryan_dubey_rn/">
                <MdEmail className="text-3xl my-1 text-pink-600" />
                <p className="font-semibold my-1">Email</p>
              </Link>
            </div>
            <div
              className=" flex flex-col justify-center items-center
            shadow-lg shadow-red-600 px-8 py-2  duration-500 mt-4 hover:ease-in-out hover:transform hover:text-3xl hover:text-black hover:bg-white"
            >
              <Link href="https://wa.me/917005742790">
                <IoLogoWhatsapp className="text-green-600 text-3xl" />
                <p className="font-semibold my-1">Whatsapp</p>
              </Link>
            </div>

            <div
              className=" flex flex-col justify-center items-center
            shadow-lg shadow-red-600 px-8 py-2  duration-500 mt-4 hover:ease-in-out hover:transform hover:text-3xl hover:text-black hover:bg-white"
            >
              <Link href="https://www.instagram.com/aryan_dubey_rn/">
                <FaInstagramSquare className="text-3xl my-1 text-pink-600" />
                <p className="font-semibold my-1">Instagram</p>
              </Link>
            </div>
            <div
              className=" flex flex-col justify-center items-center
            shadow-lg shadow-red-600 px-8 py-2  duration-500 mt-4 hover:ease-in-out hover:transform hover:text-3xl hover:text-black hover:bg-white"
            >
               <Link href="https://www.linkedin.com/in/aryanbaba4199/">
              <FaLinkedinIn className="text-blue-600 text-3xl" />
                <p className="font-semibold my-1">LinkedIn</p>
              </Link>
            </div>

            <div
              className=" flex flex-col justify-center items-center
            shadow-lg shadow-red-600 px-8 py-2  duration-500 mt-4 hover:ease-in-out hover:transform hover:text-3xl hover:text-black hover:bg-white"
            >
               <Link href="https://www.upwork.com/freelancers/~01269527774139bddd">
               <SiUpwork className="text-green-600 text-3xl" />
                <p className="font-semibold my-1">Upwork</p>
              </Link>
            </div>
            <div
              className=" flex flex-col justify-center items-center
            shadow-lg shadow-red-600 px-8 py-2  duration-500 mt-4 hover:ease-in-out hover:transform hover:text-3xl hover:text-black hover:bg-white"
            >
               <Link href="https://www.fiverr.com/aryanbaba4199?up_rollout=true">
               <SiFiverr  className="text-green-600 text-3xl" />
                <p className="font-semibold my-1">Fiverr</p>
              </Link>
            </div>
            <div
              className=" flex flex-col justify-center items-center
            shadow-lg shadow-red-600 px-8 py-2  duration-500 mt-4 hover:ease-in-out hover:transform hover:text-3xl hover:text-black hover:bg-white"
            >
               <Link href="https://www.freelancer.in/u/aryanbaba4199">
               <SiFreelancer  className="text-cyan-600 text-3xl" />
                <p className="font-semibold my-1">Freelancer</p>
              </Link>
            </div>
            
            <div
              className=" flex flex-col justify-center items-center
            shadow-lg shadow-red-600 px-8 py-2  duration-500 mt-4 hover:ease-in-out hover:transform hover:text-3xl hover:text-black hover:bg-white"
            >
              <Link href="https://github.com/aryanbaba4199">
                <FaGithub className="text-3xl my-1" />
                <p className="font-semibold my-1">Github</p>
              </Link>
            </div>
            <div
              className=" flex flex-col justify-center items-center
            shadow-lg shadow-red-600 px-8 py-2  duration-500 mt-4 hover:ease-in-out hover:transform hover:text-3xl hover:text-black hover:bg-white"
            >
              <Link href="https://leetcode.com/u/aryanbaba4199/">
                <SiLeetcode className="text-3xl my-1 text-orange-600" />
                <p className="font-semibold my-1">LeetCode</p>
              </Link>
            </div>
          </div>
          <div className="mt-16 flex justify-end items-center text-gray-500 px-5">
              <p>Developd by Raushan Kumar </p>
          </div>
        </div>
      </>
    </Fragment>
  );
};

export default Footer;
