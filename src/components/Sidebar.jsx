import React from "react";
import cv from "../gallery/icons8-cv-50.png";
import profile_img from "../gallery/face.png";
import pdf from "../gallery/Resume.pdf";

const Sidebar = () => {
  return (
    <div>
      {/* sidebar start */}
      <div className="sidebar" data-aos="fade-right">
        {/* sidebar_top start */}

        <div className="sidebar_top text-center">
          <div className="sidebar-colors">
            <div
              onClick={() => {
                document
                  .querySelector(":root")
                  .style.setProperty("--main-color", "red");
              }}
            ></div>
            <div
              onClick={() => {
                document
                  .querySelector(":root")
                  .style.setProperty("--main-color", "#ffc107");
              }}
            ></div>
            <div
              onClick={() => {
                document
                  .querySelector(":root")
                  .style.setProperty("--main-color", "blue");
              }}
            ></div>
            <div
              onClick={() => {
                document
                  .querySelector(":root")
                  .style.setProperty("--main-color", "green");
              }}
            ></div>
          </div>
          <img src={profile_img} className="" alt="Profile_photo" />
          <h4>Saurabh Dhull</h4>
          <p>I am a Frontend Developer</p>
        </div>
        {/* sidebar_top end */}

        {/* sidebar_end start */}
        <div className="sidebar_end">
          {/* about section start */}
          <div className="sidebar-info">
            <div>
              <h5>State :</h5>
              <p>Haryana</p>
            </div>
            <div>
              <h5>City :</h5>
              <p>Sonipat</p>
            </div>
            <div>
              <h5>Age :</h5>
              <p>20</p>
            </div>
          </div>
          {/* about section end */}

          <br />
          <hr />

          {/* coding language section start */}
          <div className="codeing_language">
            <div>
              <h5 className="mt-3 mb-1">HTML & CSS</h5>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                <div
                  className="h-1.5 rounded-full animation1"
                  style={{ width: "90%", background: "var(--main-color)" }}
                ></div>
              </div>
            </div>

            <div>
              <h5 className="m-1">JAVASCRIPT</h5>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                <div
                  className="h-1.5 rounded-full animation2"
                  style={{ width: "75%", background: "var(--main-color)" }}
                ></div>
              </div>
            </div>
            <div>
              <h5 className="m-1">BOOTSTRAP & TAILWIND</h5>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                <div
                  className="h-1.5 rounded-full animation3"
                  style={{ width: "80%", background: "var(--main-color)" }}
                ></div>
              </div>
            </div>
            <div>
              <h5 className="m-1">JQUERY</h5>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                <div
                  className="h-1.5 rounded-full animation4"
                  style={{ width: "75%", background: "var(--main-color)" }}
                ></div>
              </div>
            </div>
            <div>
              <h5 className="m-1">REACT JS</h5>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                <div
                  className="h-1.5 rounded-full animation5"
                  style={{ width: "80%", background: "var(--main-color)" }}
                ></div>
              </div>
            </div>
          </div>
          {/* coding language section start */}

          <br />
          <hr />
          {/* language section start */}
          <div className="language">
            <div>
              <h5 className="mt-3 mb-1">English</h5>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                <div
                  className="h-1.5 rounded-full animation6"
                  style={{ width: "80%", background: "var(--main-color)" }}
                ></div>
              </div>
            </div>
            <div>
              <h5 className="m-1">Hindi</h5>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                <div
                  className="h-1.5 rounded-full animation7"
                  style={{ width: "95%", background: "var(--main-color)" }}
                ></div>
              </div>
            </div>
          </div>
          {/* language section start */}

          {/* knowledge start */}
          <br />
          <hr />
          <div className="mt-3 mb-3">
            <div className="mt-2 mb-2">Bootstrap, JQuery</div>
            <div className="mt-2 mb-2">GITHUB knowledge</div>
            <div className="mt-2 mb-2">REACT JS</div>
            <div className="mt-2 mb-2">VS Code</div>
          </div>
          {/* knowledge end */}

          <br />
          <hr />
          <a href='' download={pdf}>
            <div className="cv mt-2">
              <img src={cv} alt="" />
              <h3>Download cv</h3>
            </div>
          </a>
        </div>
        {/* sidebar_end end */}
      </div>
      {/* sidebar end */}
    </div>
  );
};

export default Sidebar;
