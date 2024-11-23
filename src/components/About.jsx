import React, { useState, useRef } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleFocus = (e) => {
    e.target.placeholder = '';
  };

  const handleBlur = (e) => {
    if (e.target.value === '') {
      e.target.placeholder = e.target.dataset.placeholder;
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
      <Reveal>
        <div className="border border-gray-700 rounded-lg shadow-lg p-6 md:p-12 bg-purple-700/10">
          <div className="flex flex-wrap md:mb-6 justify-center items-center mx-auto gap-8 place-items-center">
        
              <div className="text-gray-300 my-3 justify-center items-center mx-auto">
                <h3 className="text-4xl font-semibold mb-5 text-center">
                  About <span>Me</span>
                </h3>
                <p className="text-justify leading-7 mx-auto">
                  Fresh graduate Web Developer dedicated to impactful web
                  applications. With strong Front End Developer. I strive to
                  deliver solutions that prioritize user experience and
                  accessibility. I enjoy learning from others and continuously
                  improving my skills.
                </p>
              </div>
            </div>

     
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
