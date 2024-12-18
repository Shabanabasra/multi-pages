import React from "react";

const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-yellow-400 rounded-lg shadow-lg my-44">
      <h2 className="text-4xl font-bold text-center mb-6">Contact Us</h2>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Full Name"
          required
          className="p-3 rounded-lg border border-gray-300"
        />
        <input
          type="email"
          placeholder="Email Address"
          required
          className="p-3 rounded-lg border border-gray-300"
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="p-3 rounded-lg border border-gray-300"
        />
        <textarea
          placeholder="Your Message"
          rows={4}
          required
          className="p-3 rounded-lg border border-gray-300"
        ></textarea>
        <button className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
