import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#111111] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/8005600f-8235-47bd-81ed-5d8539b45024"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-200 text-gray-200">
            Contact
          </p>
          <p className="text-gray-200 py-4">
            // Feel free to contact me below, or at - alexanderfisher@ufl.edu
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-slate-400 hover:border-slate-400 px-4 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 transform transition ease-in-out duration-300">
          Contact Me
        </button>
      </form>
    </div>
  );
};

export default Contact;
