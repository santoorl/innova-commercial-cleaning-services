import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100">
      {/* Encabezado */}
      <header className="relative bg-gray-800 text-white py-20 px-4 text-center">
        <div className="absolute inset-0 bg-gray-800 opacity-70"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold">About Us</h1>
          <p className="mt-4 text-lg">
            Learn more about who we are, our mission, and what makes us your trusted cleaning partner.
          </p>
        </div>
      </header>

      {/* Contenido */}
      <div className="container mx-auto py-12 px-4">
        {/* Historia */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <p className="text-gray-600 leading-relaxed">
              Innova Commercial Cleaning Services was founded with a mission to deliver exceptional cleaning
              solutions for businesses. From humble beginnings, we have grown into a trusted name in the
              industry, known for our commitment to quality and customer satisfaction.
            </p>
            <img
              src="https://via.placeholder.com/500x300"
              alt="Our Story"
              className="rounded-md shadow-md"
            />
          </div>
        </section>

        {/* Misión y Visión */}
        <section className="mb-12 bg-gray-200 p-8 rounded-md shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Mission & Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            <strong>Our Mission:</strong> To provide top-tier cleaning services that exceed our clients’ expectations, 
            creating clean, safe, and productive environments for businesses.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            <strong>Our Vision:</strong> To be the go-to commercial cleaning provider recognized for innovation, 
            reliability, and exceptional service.
          </p>
        </section>

        {/* Equipo */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">Erick Valenzuela</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">Erick valenzuela</h3>
              <p className="text-gray-600">Operations Manager</p>
            </div>
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">Justin Valenzuela</h3>
              <p className="text-gray-600">Client Relations</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
