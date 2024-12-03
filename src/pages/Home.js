import React from 'react';

const Home = ({ isMenuOpen }) => {
  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header
        className={`relative bg-gray-800 text-white px-4 text-center animate-fade-in ${
          isMenuOpen ? 'hidden' : 'block'
        }`}
      >
        <div className="absolute inset-0">
          <img
            src="/images/gallery/fondo1.jpeg"
            alt="Post Cleaning Highlight"
            className="object-cover w-full h-full opacity-60"
          />
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold text-white drop-shadow-md font-sans animate-slide-fade-in delay-200">
            Innova Commercial Cleaning Services
          </h1>
          <p className="mt-4 text-lg text-gray-300 tracking-wide font-sans animate-slide-fade-in delay-500">
            Professional cleaning solutions tailored to your needs.
          </p>
        </div>
      </header>

      {/* Servicios Destacados */}
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-md p-6">
            <img
              src="/images/services/services3.jpeg"
              alt="Office Cleaning"
              className="w-full h-40 object-cover rounded-md mb-4 shadow-md hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-xl font-semibold">Office Cleaning</h3>
            <p className="mt-2 text-gray-600">
              Keep your office spaces spotless and professional.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-md p-6">
            <img
              src="/images/gallery/post4.jpeg"
              alt="Retail Cleaning"
              className="w-full h-40 object-cover rounded-md mb-4 shadow-md hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-xl font-semibold">Retail Cleaning</h3>
            <p className="mt-2 text-gray-600">Clean, fresh, and welcoming retail environments.</p>
          </div>
          <div className="bg-white shadow-md rounded-md p-6">
            <img
              src="/images/gallery/post11.jpeg"
              alt="Post-Construction Cleaning"
              className="w-full h-40 object-cover rounded-md mb-4 shadow-md hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-xl font-semibold">Post-Construction Cleaning</h3>
            <p className="mt-2 text-gray-600">
              Thorough cleaning after construction projects.
            </p>
          </div>
        </div>
      </section>

      {/* Mini Galería */}
      <section className="py-12 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Recent Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img
            src="/images/gallery/post1.jpeg"
            alt="Gallery 1"
            className="w-full h-40 object-cover rounded-md shadow-md animate-fade-in hover:scale-105 transition-transform duration-300"
          />
          <img
            src="/images/gallery/post2.jpeg"
            alt="Gallery 2"
            className="w-full h-40 object-cover rounded-md shadow-md animate-fade-in hover:scale-105 transition-transform duration-300"
          />
          <img
            src="/images/gallery/post3.jpeg"
            alt="Gallery 3"
            className="w-full h-40 object-cover rounded-md shadow-md animate-fade-in hover:scale-105 transition-transform duration-300"
          />
          <img
            src="/images/gallery/post4.jpeg"
            alt="Gallery 4"
            className="w-full h-40 object-cover rounded-md shadow-md animate-fade-in hover:scale-105 transition-transform duration-300"
          />
          <img
            src="/images/gallery/post12.jpeg"
            alt="Gallery 5"
            className="w-full h-40 object-cover rounded-md shadow-md animate-fade-in hover:scale-105 transition-transform duration-300"
          />
          <img
            src="/images/gallery/post6.jpeg"
            alt="Gallery 6"
            className="w-full h-40 object-cover rounded-md shadow-md animate-fade-in hover:scale-105 transition-transform duration-300"
          />
        </div>
        <a
          href="/gallery"
          className="mt-8 inline-block bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
        >
          View More
        </a>
      </section>
    </div>
  );
};

export default Home;
