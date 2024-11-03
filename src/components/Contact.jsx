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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
            <div className="text-center md:text-left">
              <div className="text-gray-300 my-3">
                <h3 className="text-4xl font-semibold mb-5">
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

              <div className="flex flex-wrap justify-center gap-7 mt-10">
                <div className="bg-gray-800/40 p-4 rounded-lg text-center">
                  <h3 className="md:text-4xl text-2xl font-semibold text-white">
                    5 <span>+</span>
                  </h3>
                  <p className="text-xs md:text-base">
                    <span>Projects</span>
                  </p>
                </div>

                <div className="bg-gray-800/40 p-4 rounded-lg text-center">
                  <h3 className="md:text-4xl text-2xl font-semibold text-white">
                    1
                  </h3>
                  <p className="text-xs md:text-base">
                    <span>year of experience</span>
                  </p>
                </div>

                <div className="bg-gray-800/40 p-4 rounded-lg text-center">
                  <h3 className="md:text-4xl text-2xl font-semibold text-white">
                    2 <span>+</span>
                  </h3>
                  <p className="text-xs md:text-base">
                    <span>clients</span>
                  </p>
                </div>
              </div>
            </div>

            <form
              action="https://getform.io/f/bxojpxda"
              method="POST"
              className="max-w-md w-full p-5 md:p-12"
              id="form"
            >
              <p className="text-gray-100 font-bold text-xl mb-2 text-center">
                Let’s connect!
              </p>
              <input
                type="text"
                id="name"
                placeholder="Your Name ..."
                name="name"
                value={formData.name}
                className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
                data-placeholder="Your Name ..."
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                ref={nameRef}
                required
                aria-label="Name"
              />
              <input
                type="email"
                id="email"
                placeholder="Your Email ..."
                name="email"
                value={formData.email}
                className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
                data-placeholder="Your Email ..."
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                ref={emailRef}
                required
                aria-label="Email"
              />
              <textarea
                name="message"
                id="textarea"
                cols="30"
                rows="4"
                placeholder="Your Message ..."
                value={formData.message}
                className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                ref={messageRef}
                required
                aria-label="Message"
              />
              <button
                type="submit"
                className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color hover:bg-purple-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
