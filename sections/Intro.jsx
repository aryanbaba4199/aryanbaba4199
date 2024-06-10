"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../styles/style.module.css"; // importing the CSS module
import Link from "next/link";

const Intro = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const letters = "Full".split("");
  const stack = "Stack".split("");
  const developer = "Developer".split("");
  const slash = "|".split("");

  return (
    <div className="flex justify-between items-center h-screen md:mx-16 px-4 gap-16 w-[100%] flex-wrap">
      <div data-aos="fade-right" data-aos-duration="300" className="md:w-[50%] w-[100%]">
        <h2
          data-aos="fade-up"
          data-aos-delay="300"
          className="md:text-3xl text-xl font-semibold font-serif "
        >
          Hi there
        </h2>
        <p data-aos = 'fade-up' data-aos-duration = '500' className=" mt-8 md:text-4xl text-2xl font-serif mb-4">I am a </p>
        <div className="flex justify-center md:gap-8 gap-4">
          <div
            className={`md:text-5xl text-2xl font-semibold font-serif md:ml-32  ${styles.animatedText}`}
          >
            {letters.map((letter, index) => (
              <span key={index} className={styles.letter} data-aos = 'fade-up' data-aos-duration = '1000'>
                {letter}
              </span>
            ))}
          </div>

          <h3 data-aos="fade-up" data-aos-delay="2000">
            {" "}
            <div
              className={`md:text-5xl text-2xl font-semibold font-serif  ${styles.animatedText}`}
            >
              {stack.map((letter, index) => (
                <span key={index} className={styles.letter}>
                  {letter}
                </span>
              ))}
            </div>
          </h3>

          <h3 data-aos="fade-up" data-aos-delay="2000">
            {" "}
            <div
              className={`md:text-5xl text-2xl font-semibold font-serif ${styles.animatedText}`}
            >
              {developer.map((letter, index) => (
                <span key={index} className={styles.letter}>
                  <p className="text-cyan-400 hover:text-white">
                    {letter}
                  </p>
                </span>
              ))}
            </div>
          </h3>

          <h3 data-aos="fade-up" data-aos-delay="2000">
            {" "}
            <div
              className={`md:text-5xl text-2xl font-semibold font-serif ${styles.animatedText}`}
            >
              {slash.map((letter, index) => (
                <span key={index} className={styles.letter}>
                  <p className="text-cyan-400 hover:text-white hover:shadow hover:">
                    {letter}
                  </p>
                </span>
              ))}
            </div>
          </h3>
        </div>
        <p className="font-serif mt-4" data-aos='fade-up' data-aos-duration = '1500'>
          Highly motivated Full-Stack Developer with 2+ years of experience
          building web applications using the MERN stack (MongoDB, Express.js,
          React, Node.js) and Next.js. I'm passionate about creating
          user-friendly, performant, and scalable web experiences.
        </p>
        <div className="mt-16 flex justify-center gap-8" data-aos ='fade-up' data-aos-duration = '4000'>
        <Link href="/#getInTouch" data-aos ='fade-up' data-aos-duration='1000' className="bg-cyan-600 px-8 py-2 font-semibold shadow-lg hover:shadow-red-600 rounded-lg hover:text-blue-600 hover:bg-white active:bg-green-600 active:text-white active:translate-y-1 hover:cursor-pointer">Hire Me </Link>
        <Link  href = "https://drive.google.com/file/d/1yCCpn7uuFrwNpJb05q9cgkQ40MQR6IAY/view?usp=drive_link"data-aos ='fade-up' data-aos-duration='1000'  className="bg-blue-600 px-8 py-2 font-semibold shadow-lg hover:shadow-red-600 rounded-lg hover:text-blue-600 hover:bg-white active:bg-green-600 active:text-white active:translate-y-1 hover:cursor-pointer">Download CV </Link>
      </div>
      </div>
      <div className="md:block hidden">
        <Image
          data-aos="fade-left"
          data-aos-duration="1000"
          src={"/images/male.png"}
          width={200}
          height={500}
        />
      </div>
      
    </div>
  );
};

export default Intro;
