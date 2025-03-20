import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Contact Section */}
      <section className="py-16 bg-blue-400 text-white text-center px-6">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg">
          Get in touch with us to learn more about our programs or if you have any questions!
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-700 text-center mb-6">Send Us a Message</h2>
          <form action="#" method="POST" className="space-y-6 max-w-lg mx-auto bg-purple-500 p-8 rounded-lg shadow-lg">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="bg-gray-100 mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="bg-gray-100 mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white-700">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                className="bg-gray-100 mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-purple-900 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition ease-in-out duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="py-16 px-6 bg-blue-400">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white-700">Email</h3>
            <p className="text-white-600">info@roboworld.co.za</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white-700">Phone</h3>
            <p className="text-white-600">+27 69 689 3613</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white-700">Address</h3>
            <p className="text-white-600">848 Shabangu Avenue Mamelodi, Pretoria, South Africa</p>
          </div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-700 text-center mb-6">Our Location</h2>
            <div className="aspect-w-16 aspect-h-9">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.68232425065!2d28.34318223864672!3d-25.714940077475408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e955f9d796a8fdb%3A0xa090a140cd0700e!2s848%20Shabangu%20Ave%2C%20Naledi%2C%20Pretoria%2C%200122!5e0!3m2!1sen!2sza!4v1734532051353!5m2!1sen!2sza"
                width="100%"
                height="450"
                style={{ border: '0' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map Location"
                />
                </div>
            </div>
        </section>

      {/* Social Media Links Section */}
      <section className="py-16 bg-gray-200 text-center">
        <h2 className="text-3xl font-bold text-gray-700 mb-6">Follow Us</h2>
        <div className="space-x-6">
          <a href="https://facebook.com" className="text-gray-700 hover:text-blue-600">
          <FontAwesomeIcon icon={faFacebook} size="2x" className="text-blue-600" />
          </a>
          <a href="https://twitter.com" className="text-gray-700 hover:text-blue-600">
          <FontAwesomeIcon icon={faTwitter} size="2x" className="text-blue-600" />
          </a>
          <a href="https://instagram.com" className="text-gray-700 hover:text-pink-600">
          <FontAwesomeIcon icon={faInstagram} size="2x" className="text-blue-600" />
          </a>
          <a 
            href="https://wa.me/27696893613?text=Hello!%20I%20would%20like%20to%20contact%20you%20about%20your%20programs"
            className="text-green-500 hover:text-green-700">
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
