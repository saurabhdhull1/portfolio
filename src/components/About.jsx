import React from "react";

const About = () => {

  return (
    <div>
      <h2 className="text-md ml-2 mt-2 mb-4 text-neutral-400 dropshadow">
        About me
      </h2>
      <div className="about">
        <div className="about-div">
          <h2>Hii There</h2>
          <div>
            I am Saurabh dhull, web developer. I have rich experience in website
            building and customization, and also have Good knowledge of HTML,
            CSS, JS, React, Bootstrap, Tailwind, Git, Github, Visual studio code
          </div>
          <br />
          <div>
            To work with an organization where i can learn new skills and
            increase my abilities for the organizational goals as well as
            myself.Looking forward to use my skills and ability in progressive
            and innovative work environment.
          </div>
          <br />
          <div>Name: Saurabh Dhull</div>
          <div>Location: Sonipat, Haryana</div>
          <div>Birthday: 22 January,2022</div>
          <div>Email: dhullsaurabh3111@gmail.com</div>
        </div>
      </div>
      {/* services start */}
      <h2 className="text-md ml-2 mt-3 mb-4 text-neutral-400 dropshadow">
        Services
      </h2>
      <div className="services">
        <div className="services-div" >
          <h3>Web designer</h3>
          <p>
            A web designer is responsible for creating the design and layout of
            a website or web pages. It and can mean working on a brand new
            website or updating an already existing site.
          </p>
        </div>
        <div className="services-div">
          <h3>Frontend developer</h3>
          <p>
            A front end developer has one general responsibility: to ensure that
            website visitors can easily interact with the page.
          </p>
        </div>
        <div className="services-div">
          <h3>React developer</h3>
          <p>
            React developers are software professionals who work with React to
            build UIs. By association, React developers are also front-end
            developers as well as JavaScript developers.
          </p>
        </div>
      </div>
      {/* services end */}
    </div>
  );
};

export default About;
