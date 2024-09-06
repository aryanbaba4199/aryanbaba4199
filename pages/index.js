import { Fragment, useState } from "react";

import Head from "next/head";
import dynamic from "next/dynamic";
import About from "@/sections/about";
import Education from "@/sections/education";
import Experience from "@/sections/experience";
import StarsCanvas from "@/components/starcanvas";
import Features from "@/components/feature";
import Feedback from "@/components/Feedback/feedback";
import Skills from "@/sections/Skills";

const Navbar = dynamic(() => import("@/layout/navbar/Navbar"));
const Footer = dynamic(() => import("@/layout/footer/Footer"));
const Intro = dynamic(() => import("@/sections/Intro"));
const Services = dynamic(() => import("@/components/Services"));

const Projects = dynamic(() => import("@/sections/Projects"));
const LatestBlogs = dynamic(() => import("@/sections/LatestBlogs"));
const Apps = dynamic(() => import("@/sections/Apps"));
const SendMail = dynamic(() => import("@/utils/SendMail"));

const ChatSystem = dynamic(() => import("@/utils/ChatSystem"));

const Home = () => {
  const [onePage, setOnePage] = useState(false);

  return (
    <Fragment>
      <Head>
        <title>Techie Warriors</title>
        {/* <!-- Primary Meta Tags --> */}
        <meta content="Techie Warriors" name="title" />
        <meta
          content="Your Vision Our Code | Starting price 3000/- Only"
          name="description"
        />

        <meta content="website" property="og:type" />

        <meta content="Techi Warriors" property="og:title" />
        <meta
          content="Explore the best Next.js and React.js portfolio by Raushan Kumar. Featuring simple, dark and light theme designs and mobile responsiveness."
          property="og:description"
        />

        {/* <!-- Other Meta Tags --> */}
        <meta
          content="portfolio, Next.js, React.js, web development, dark theme, light theme, best portfolio github, best next js portfolio, how to make a portfolio, best react js portfolio github, best react js portfolio, best next js portfolio, react js developer in Kota, react js developer in Jaipur, react js developer in India, react js developer in Rajasthan"
          name="keywords"
        />
        <meta content="Raushan Kumar" name="author" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />

        {/* <!-- Favicon --> */}
        <link href="favicon.ico" rel="icon" type="image/x-icon" />
      </Head>
      <div className="relative">
        <StarsCanvas />
        <div className="relative z-10">
          {/* Desktop Navbar */}
          <Navbar />

          {/* Welcome Page */}
          <Intro />

          {/* About */}
          <About />
          <Footer />
          <Features />
          <Services/>
          {/* Skills  */}
          <Skills />
          {/* Education */}
          <Education />

          {/* Experience */}
          <Experience />
          {/* Projects */}
          <Projects />
          {/* SocialMedia */}

          {/* LatestBlog */}
          <LatestBlogs />
          {/* Apps */}
          <Feedback />
          <Apps />
          {/* Send Mail */}
          <SendMail />
          {/* Footer */}
          <Footer />
          <div className="">
            {/* tawk.to Chat System */}
            <ChatSystem />
          </div>

          <div className=" flex justify-end items-center text-gray-500 px-5 py-4">
            <p>Developd by Raushan Kumar : +919835776768 </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
