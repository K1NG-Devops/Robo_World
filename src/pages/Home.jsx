import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import 'animate.css';

function Home() {
    return (
      <div className="mt-4 min-h-screen bg-gray-50">
          <Header />
        {/* Hero Section */}
        <section className="py-16 md:py-12 sm:py-8 flex flex-col items-center justify-center bg-blue-400 text-white px-6 sm:px-4">
            <div className="w-full justify-center items-center text-center md:text-left animate-fadeIn">
                <h1 className="w-full flex item-center justify-center text-2xl lg:text-4xl font-bold mb-2 mt-8">Empowering Young Minds Through Technology</h1>
            </div>
            <p className="text-xs justify-center text-center lg:text-xl sm:text-10 mb-6 animate__animated animate__fadeInUp"> Join Roboworld to learn coding, robotics, and more! </p>
            <Link to='/programs' className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-gray-200 hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp">
              Learn More
            </Link>

          <div className="mt-6 md:mt-0 animate-fadeIn mb-18">
            <img src='/image1.webp' alt="Roboworld" className="pt-5 rounded-lg shadow-lg h-lg h-100 w-4/4" />
          </div>
        </section>
  
        {/* About Section */}
        <section id="about" className="py-16 px-4 text-center mt-6">
          <h2 className="text-3xl font-bold mb-4 text-gray-700 animate-fadeIn">What We Do</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Roboworld is a nonprofit organization dedicated to nurturing creativity and innovation in young minds. 
            Starting with children as young as 3–4 years old.
          </p><br />
          
          <p className="text-gray-700 max-w-2xl mx-auto">We provide engaging, technology-driven education programs in coding and robotics. 
            Our initiatives are tailored for daycare and primary school children, laying a strong foundation for their future success.
          </p>
        </section>
  
        {/* Features Section */}
        <section id="programs" className="py-16 bg-gray-100">
          <h2
            className="text-3xl font-bold text-center mb-8 text-gray-700"
            data-aos="fade-up"
          >
            Featured Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {[
              {
                title: "Daycare Programs",
                image: "/smartstart.jpeg",
                description: "Engaging activities for 3–4-year-olds to spark early learning.",
                color: "bg-purple-700",
                route: "/register/daycare",  // Link for this program's registration
              },
              {
                title: "Robotics Education",
                image: "/hands-on.jpg",
                description: "Hands-on robotics learning to inspire innovation.",
                color: "bg-blue-400",
                route: "/register/robotics",  // Link for this program's registration
              },
              {
                title: "Coding Classes",
                image: "/coding.jpg",
                description: "Interactive lessons in programming for all skill levels.",
                color: "bg-pink-600",
                route: "/register/coding",  // Link for this program's registration
              },
              {
                title: "After-School Programs",
                image: "/after-shool2.jpeg",
                description: "Fun and educational sessions for young learners.",
                color: "bg-yellow-400",
                route: "/register/afterschool",  // Link for this program's registration
              },
            ].map((program, index) => (
              <motion.div
                key={index}
                className={`${program.color} shadow-md p-6 rounded-lg`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-bold mb-2 text-white">{program.title}</h3>
                <img
                  src={program.image}
                  alt={program.title}
                  className="rounded-lg shadow-lg mb-4"
                />
                <p className="text-white mb-4">{program.description}</p>
                <Link 
                  to={program.route}
                  className="bg-white text-purple-900 px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300"
                >
                  Register Now
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

  
        {/* Call-to-Action Section */}
        <section className="py-16 bg-purple-600 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us Today!</h2>
          <p className="mb-6">Take the first step in shaping your child's future in technology.</p>
          <Link to="/get-started" className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-gray-200 transition ease-in-out duration-300">
            Get Started
          </Link>
        </section>
        <Footer />
      </div>
    );
}

export default Home;
