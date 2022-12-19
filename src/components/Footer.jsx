import React from "react";
import home from "../gallery/icons8-home-page-64.png";
import project from "../gallery/icons8-microsoft-project-50(1).png";
import info from "../gallery/icons8-info-48.png";
import popular from "../gallery/icons8-very-popular-topic-32.png";
import mail from "../gallery/icons8-composing-mail-48.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* footer start */}
      <div className="footer" >
        <div onClick={() => navigate("/")}>
          <img src={home} alt="Home icon" />
          <h5>HOME</h5>
        </div>
        <div onClick={() =>  navigate("/project")}>
          <img src={project} alt="" />
          <h5>PROJECTS</h5>
        </div>
        <div onClick={() =>  navigate("/about")}>
          <img src={info} alt="" />
          <h5>ABOUT ME</h5>
        </div>
        <div onClick={() =>  navigate("/review")}>
          <img src={popular} alt="" />
          <h5>RECOMMENDATION</h5>
        </div>
        <div onClick={() =>  navigate("/contact")}>
          <img src={mail} alt="" />
          <h5>CONTACT ME</h5>
        </div>
      </div>
      {/* footer end */}
      </>
  );
};

export default Footer;
