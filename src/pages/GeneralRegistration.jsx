import React from 'react';

function GeneralRegistration() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-4 text-center text-gray-700">
        Get Started with Future Nest Academy
      </h2>
      
      <p className="text-center text-gray-700 mb-6">
        Fill out the form below to join one of our exciting programs!
      </p>
      
      {/* Registration Form */}
      <form className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Full Name</label>
          <input type="text" id="name" className="w-full p-3 border border-gray-300 rounded-lg mt-2" placeholder="Enter your full name" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email Address</label>
          <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-lg mt-2" placeholder="Enter your email" />
        </div>
        <div className="mb-4">
          <label htmlFor="program" className="block text-gray-700">Program of Interest</label>
          <select id="program" className="w-full p-3 border border-gray-300 rounded-lg mt-2">
            <option value="daycare">Daycare Programs</option>
            <option value="robotics">Robotics Education</option>
            <option value="coding">Coding Classes</option>
            <option value="afterschool">After-School Programs</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 w-full">
          Register Now
        </button>
      </form>
    </div>
  );
}

export default GeneralRegistration;
