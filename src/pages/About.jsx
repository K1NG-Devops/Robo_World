import React from "react";
import Header from "../components/Header";
import Footer from '../components/Footer';
import 'animate.css';

function About() {
  return (
    <div className="mt-4 min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="w-full py-16 md:py-12 sm:py-8 flex flex-col items-center justify-center bg-blue-400 text-white px-6 sm:px-4">
        <h1 className="text-4xl font-bold mb-4 text-center">About Future Nest Academy</h1>
        <p className="text-lg max-w-2xl text-center">
          Shaping the future of young minds through innovative education in technology and robotics.
        </p>
      </section>

      {/* Mission and Vision */}
      <section className="w-full py-16 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold mb-6 text-gray-700">Our Mission & Vision</h2>
        <div className="flex flex-col md:flex-row justify-around items-start gap-8">
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg max-w-sm">
            <h3 className="text-xl font-bold text-blue-600 mb-2">Our Mission</h3>
            <p className="text-gray-700">
              To provide accessible, technology-driven education programs that empower children to innovate and lead.
            </p>
          </div>
          <div className="bg-purple-100 p-6 rounded-lg shadow-lg max-w-sm">
            <h3 className="text-xl font-bold text-purple-600 mb-2">Our Vision</h3>
            <p className="text-gray-700">
              A world where every child has the tools and confidence to thrive in a tech-driven future.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-yellow-200 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-yellow-700">500+</h3>
            <p className="text-gray-700">Students Enrolled</p>
          </div>
          <div className="p-6 bg-pink-200 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-pink-700">10+</h3>
            <p className="text-gray-700">School Partnerships</p>
          </div>
          <div className="p-6 bg-green-200 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-green-700">20+</h3>
            <p className="text-gray-700">Workshops Delivered</p>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">Meet the Team</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="text-center">
            <img
              src="/team-member1.jpg"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-gray-700">Karabo Masote</h3>
            <p className="text-gray-500">Chairperson</p>
          </div>
          <div className="text-center">
            <img
              src="/team-member2.jpg"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-gray-700">Zandile Mahlangu</h3>
            <p className="text-gray-500">Secretary</p>
          </div>
        <div className="text-center">
            <img
              src="/team-member2.jpg"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
              />
            <h3 className="text-xl font-bold text-gray-700">Marrion Makunyane</h3>
            <p className="text-gray-500">Marketing Manager</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-16 bg-purple-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
        <p className="mb-6">Help us create a brighter future for young learners.</p>
        <button className="bg-white text-purple-600 px-6 py-2 rounded-lg hover:bg-gray-200 transition ease-in-out duration-300">
          Get Involved
        </button>
      </section>
      <Footer />
    </div>
  );
}

export default About