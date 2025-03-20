import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ProgramRegistration() {
  const { program } = useParams(); // Get the program name from the URL parameter
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    childGender: '',
    medicalConditions: '',
    preferredProgram: program,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend)
    console.log('Form Data:', formData);
  };

  return (
    <div className="mt-4 min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-6 py-12 mt-10">

        {/* Program Indicator */}
        <div className="bg-yellow-200 p-4 rounded-lg mb-6 text-center">
          <h3 className="text-xl font-semibold text-gray-700">
            You are registering for the <span className="text-purple-700">{program.charAt(0).toUpperCase() + program.slice(1)}</span> program.
          </h3>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
          {/* Parent Name */}
          <div className="mb-4">
            <label htmlFor="parentName" className="block text-gray-700">Parent/Guardian Name</label>
            <input
              type="text"
              id="parentName"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              className="bg-white w-full p-3 border border-gray-300 rounded-lg mt-2"
              placeholder="Enter your full"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-white w-full p-3 border border-gray-300 rounded-lg mt-2"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="bg-white   w-full p-3 border border-gray-300 rounded-lg mt-2"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Child Name */}
          <div className="mb-4">
            <label htmlFor="childName" className="block text-gray-700">Child's Name</label>
            <input
              type="text"
              id="childName"
              name="childName"
              value={formData.childName}
              onChange={handleChange}
              className="bg-white   w-full p-3 border border-gray-300 rounded-lg mt-2"
              placeholder="Enter your child's full name"
              required
            />
          </div>

          {/* Child Age */}
          <div className="mb-4">
            <label htmlFor="childAge" className="block text-gray-700">Child's Age</label>
            <input
              type="number"
              id="childAge"
              name="childAge"
              value={formData.childAge}
              onChange={handleChange}
              className="bg-white   w-full p-3 border border-gray-300 rounded-lg mt-2"
              placeholder="Enter your child's age"
              required
            />
          </div>

          {/* Child Gender */}
          <div className="mb-4">
            <label htmlFor="childGender" className="block text-gray-700">Child's Gender</label>
            <select
              id="childGender"
              name="childGender"
              value={formData.childGender}
              onChange={handleChange}
              className="bg-white   w-full p-3 border border-gray-300 rounded-lg mt-2"
              required
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Medical Conditions */}
          <div className="mb-4">
            <label htmlFor="medicalConditions" className="block text-gray-700">Medical Conditions (if any)</label>
            <textarea
              id="medicalConditions"
              name="medicalConditions"
              value={formData.medicalConditions}
              onChange={handleChange}
              className="bg-white   w-full p-3 border border-gray-300 rounded-lg mt-2"
              placeholder="Enter any medical conditions your child may have"
            />
          </div>

          {/* Preferred Program (Hidden as it's passed in the URL) */}
          <input type="hidden" name="preferredProgram" value={formData.preferredProgram} />

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 w-full"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="mb-0" >
        <Footer />
      </div>  
    </div>
  );
}

export default ProgramRegistration;
