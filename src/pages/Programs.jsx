import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Programs() {
  const programs = [
    {
      name: "Daycare Programs",
      image: "/smartstart.jpeg",
      description: "Engaging activities for 3–4-year-olds to spark early learning. Our daycare programs focus on fostering curiosity, creativity, and problem-solving through hands-on activities and play-based learning.",
      audience: "Ages 3–4",
      benefits: "Lays a strong foundation for future STEM learning.",
    },
    {
      name: "Robotics Education",
      image: "/hands-on.jpg",
      description: "Hands-on robotics learning for young innovators. Students will design, build, and program robots, developing critical thinking and teamwork skills.",
      audience: "Ages 5–12",
      benefits: "Encourages innovation and problem-solving.",
    },
    {
      name: "Coding Classes",
      image: "/coding.jpg",
      description: "Interactive lessons in programming, tailored for beginners and intermediate learners. Students will learn to create games, websites, and apps while mastering coding fundamentals.",
      audience: "Ages 6–15",
      benefits: "Builds logical thinking and computational skills.",
    },
    {
      name: "After-School Programs",
      image: "/after-shool2.jpeg",
      description: "Fun and educational after-school sessions that combine technology with creativity. Perfect for kids looking to explore new skills after regular school hours.",
      audience: "All ages",
      benefits: "Provides a safe and engaging environment for skill-building.",
    },
    {
      name: "Parent-Child Tech Days (Coming Soon)",
      image: "/parent-child.jpg",
      description: "Special sessions where parents and kids collaborate on simple tech projects. A perfect way to bond while exploring STEM together.",
      audience: "Families",
      benefits: "Encourages family bonding through collaborative learning.",
      comingSoon: true,
    },
    {
      name: "Girls in Tech Program (Coming Soon)",
      image: "/girls-in-tech.jpg",
      description: "A dedicated program to inspire girls to explore technology and STEM careers through mentorship and hands-on learning.",
      audience: "Girls ages 8–16",
      benefits: "Promotes diversity and confidence in tech fields.",
      comingSoon: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Header Section */}
      <section className="py-16 bg-blue-400 text-white text-center px-6">
        <h1 className="text-4xl font-bold mb-4">Explore Our Programs</h1>
        <p className="text-lg">
          Discover how <span className="bg-gray-100 text-purple-900 rounded-sm">Future Nest Academy</span> is transforming young minds through technology and innovation.
        </p>
      </section>

      {/* Programs Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`bg-white shadow-md rounded-lg p-6 relative ${
                program.comingSoon ? "opacity-80" : ""
              }`}
            >
              <img
                src={program.image}
                alt={program.name}
                className="rounded-lg mb-4 w-full h-40 object-cover"
              />
              {program.comingSoon && (
                <span className="absolute top-2 right-2 bg-yellow-500 text-white text-sm px-2 py-1 rounded-full shadow-md">
                  Coming Soon
                </span>
              )}
              <h2 className="text-2xl font-bold text-gray-700 mb-2">{program.name}</h2>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <p className="text-sm font-bold text-purple-900 mb-2">
                Target Audience: {program.audience}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                Benefits: {program.benefits}
              </p>
              {!program.comingSoon && (
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Register Now
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-16 bg-purple-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Community Today!</h2>
        <p className="mb-6">
          Ready to shape your child's future in technology? Enroll them in one of our programs now!
        </p>
        <button className="bg-white text-purple-900 px-6 py-2 rounded-lg hover:bg-gray-200 transition">
          Get Started
        </button>
      </section>
      <Footer />
    </div>
  );
}

export default Programs;
