import React, { useEffect } from "react";
import yt_img from "../gallery/yt.png";
import Stopwatch from "../gallery/stopwatch.png";
import insta from "../gallery/insta.png";
import calc from "../gallery/calculator_white.png";
import calcdark from "../gallery/calculator_dark.png";

const Project = () => {

  return (
    <div >
      {/* Project start */}
      <h2 className="text-md ml-2 mb-4 text-neutral-400 dropshadow">
        Projects
      </h2>

      <div className="project" >
        <div className="project-div" href="https://">
          <img src={yt_img} alt="Yt_image" />
          <div>
            <p>Youtube 2.0</p>
            <div>
              <a href="http://youtubebysaurabh.netlify.app/" target="_blank">
                check now
              </a>
            </div>
          </div>
        </div>
        <div className="project-div" href="https://">
          <img src={insta} alt="Yt_image" />
          <div>
            <p>Instagram</p>
            <div>
              <a target="_blank" className="">
                check now
              </a>
            </div>
          </div>
        </div>
        <div className="project-div" href="https://">
          <img src={calcdark} alt="Yt_image" />
          <div>
            <p>Calculator</p>
            <div>
              <a
                href="https://saurabhdhull1.github.io/calculator/"
                target="_blank"
              >
                check now
              </a>
            </div>
          </div>
        </div>
        <div className="project-div" href="https://">
          <img src={Stopwatch} alt="Yt_image" />
          <div>
            <p>Stopwatch</p>
            <div>
              <a
                href="https://saurabhdhull1.github.io/stopwatch/"
                target="_blank"
              >
                check now
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      {/* Project end */}
    </div>
  );
};

export default Project;
