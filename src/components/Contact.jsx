import React, { useEffect, useState } from "react";
import call from "../gallery/call.png";
import mail from "../gallery/icons8-composing-mail-48.png";

const Contact = () => {
  // const [name, setname] = useState("");
  // const [email, setemail] = useState("");
  // const [message, setmessage] = useState("");
  const [user, setuser] = useState({
    name: "",
    email: "",
    message:""
  });

  const submithandler = (e) => {
    e.preventDefault();
    setuser({
      name: "",
      email: "",
      message:""
    })
  }
  let name,value;
  const inputHandler = (e) => {
    name=e.target.name;
    value=e.target.value;
    // console.log(name);
    // console.log(value);
    setuser({...user,[name]:value})
  }




  return (
    <div>
      <h2 className="text-md ml-2 mt-2 mb-4 text-neutral-400 dropshadow">
        Contact me
      </h2>
      <div className="contact">
        <div className="contact-div1">
          <div className="contact_info">
            <h4>Contact Info</h4>
            <div>
              <img src={call} alt="" />
              <p>+91 981747460</p>
            </div>
            <div>
              <img src={mail} alt="" />
              <p>dhullaurabh3111@gamil.com</p>
            </div>
            <div className="social_contact"></div>
          </div>

          <div className="contact_side"></div>
        </div>
        <div className="contact-div2">
        <div id="submitNotificatio">submitted</div>
          <div className="contact-form">
            <p className="text-[white]">
              Feel Free to contact me any time. I will get back to you as soon
              as I can!.
            </p>
            <form action="mailto:dhullsaurabh3111@gmail.com" method="POST" onSubmit={submithandler}>
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                value={user.name}
                onChange={inputHandler}
                required
              />
              <input
                type="email"  
                name="email"
                placeholder="Enter your Email"
                value={user.email}
                onChange={inputHandler}
                required
              />
              <textarea
                required
                value={user.message}
                onChange={inputHandler}
                name="message"
                placeholder="Enter your Message"
                // cols="10"
                rows="40"
                // maxLength="600"
                // style={{ resize: "none" }}
              ></textarea>
              <button type="submit" >Submit Now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
