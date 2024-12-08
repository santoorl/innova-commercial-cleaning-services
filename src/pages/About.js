import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header className="relative bg-gray-800 text-white text-center h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/images/gallery/fondo1.jpeg" // Usa la misma imagen que las otras páginas
            alt="About Us Background"
            className="object-cover w-full h-full opacity-60"
          />
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold">About Us</h1>
          <p className="mt-4 text-lg">
            Learn more about who we are, our mission, and what makes us your
            trusted cleaning partner.
          </p>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto py-12 px-4">
        {/* Story */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <p className="text-gray-600 leading-relaxed">
              Innova Commercial Cleaning Services was founded with a mission to
              deliver exceptional cleaning solutions for businesses. From humble
              beginnings, we have grown into a trusted name in the industry,
              known for our commitment to quality and customer satisfaction.
            </p>
            <img
              src="/images/services/test1.jpg"
              alt="Our Story"
              className="rounded-md shadow-md"
            />
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-12 bg-gray-200 p-8 rounded-md shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Mission & Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <p className="text-gray-600 leading-relaxed">
                <strong>Our Mission:</strong> To provide top-tier cleaning
                services that exceed our clients’ expectations, creating clean,
                safe, and productive environments for businesses.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                <strong>Our Vision:</strong> To be the go-to commercial cleaning
                provider recognized for innovation, reliability, and exceptional
                service.
              </p>
            </div>
            <img
              src="/images/services/test2.jpg"
              alt="Mission & Vision"
              className="rounded-md shadow-md"
            />
          </div>
        </section>

        {/* Team */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Erick Valenzuela",
                role: "Founder & CEO",
                image: "/images/team/erick.jpg", // Reemplaza con una imagen válida
              },
              {
                name: "Justin Valenzuela",
                role: "Operations Manager",
                image: "/images/team/justin.jpg", // Reemplaza con una imagen válida
              },
              {
                name: "Maria Rodriguez",
                role: "Client Relations",
                image: "/images/team/maria.jpg", // Reemplaza con una imagen válida
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full mx-auto mb-4 h-40 w-40 object-cover shadow-md"
                />
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-screen-lg mx-auto text-center">
          <h3 className="text-lg font-bold">
            Innova Commercial Cleaning Services
          </h3>
          <p className="mt-4">
            Business Hours: Mon-Fri: 9 AM - 6 PM | Sat: 10 AM - 4 PM
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <button className="bg-green-500 px-4 py-2 rounded-md">
              Call or Text
            </button>
            <button className="bg-blue-500 px-4 py-2 rounded-md">
              Send Message
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
