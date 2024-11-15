import React from 'react';

const About = () => {
  return (
    <div className="bg-gradient-to-r from-black via-gray-500 to-black py-32 px-4">
      <div className="text-white text-center max-w-5xl mx-auto">
        
        {/* Page Title */}
        <h1 className="text-5xl lg:text-7xl font-bold mb-8">
          About <span className="text-orange-500">Me</span>
        </h1>

        {/* Short Description */}
        <p className="text-lg lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
          I'm a passionate web developer with a focus on creating modern, dynamic, and engaging websites. My journey has been one of continuous learning and growth in the ever-evolving world of web technologies. From front-end to back-end development, I enjoy every step of the process and love to bring ideas to life on the web.
        </p>

        {/* Image Section */}
        <div className="mt-12 mb-12">
          <img
            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80"
            alt="About Me"
            className="w-full max-w-3xl mx-auto rounded-lg shadow-xl"
          />
        </div>

        {/* Call to Action Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          
          {/* Card 1 - Skills */}
          <div className="bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-semibold text-orange-500 mb-4">Skills & Expertise</h3>
            <p className="text-gray-300">
              With a strong foundation in HTML, CSS, JavaScript, and React, I specialize in creating responsive, user-friendly, and aesthetically pleasing websites. I'm also constantly exploring new technologies and frameworks to stay updated.
            </p>
          </div>

          {/* Card 2 - Experience */}
          <div className="bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-semibold text-orange-500 mb-4">Experience & Projects</h3>
            <p className="text-gray-300">
              Over the years, I have worked on various projects, from simple landing pages to full-fledged web applications. My work is driven by a deep understanding of user experience and a passion for creating innovative solutions.
            </p>
          </div>

        </div>

        {/* Call to Action Button */}
        <div className="mt-16">
          <a 
            href="/contact"
            className="bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition duration-300">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
