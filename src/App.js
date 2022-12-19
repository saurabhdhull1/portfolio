import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import Video from "../gallery/video.mp4";
import Content from "./components/Content";
import Project from "./components/Project";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Review from "./components/Review";
import AOS from "aos";
import "aos/dist/aos.css";

const Main = () => {
  window.addEventListener('load', AOS.refresh)
  AOS.init({duration:1500});
  return (
    <div className="body">
      <div className="bodyrotater"></div>
     
      
      {/* main body start */}
      <div className="main_body">
        <div className="mainbodyrotater"></div>
        {/* sidebar start */}
        <Sidebar />
        {/* sidebar end */}

        {/* content start */}
        <div className="content">
          <div className="content_top_main" data-aos="fade-down">
            {/* Component */}

            <Routes data-aos="fade-in">
              <Route path="/" element={<Content />} />
              <Route path="/project" element={<Project />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/Review" element={<Review />} />
            </Routes>
          </div>
        </div>
        {/* content end */}

        {/* footer start */}
        <Footer />
        {/* footer end */}
      </div>
      {/* main body end */}
    </div>
  );
};

export default Main;
