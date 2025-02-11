import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const images = [
  '/images/gallery/post1.jpeg',
  '/images/gallery/post2.jpeg',
  '/images/gallery/post3.jpeg',
  '/images/gallery/post4.jpeg',
  '/images/gallery/post12.jpeg',
  '/images/gallery/post6.jpeg',
];

const Home = () => {
  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header className="relative bg-gray-800 text-white px-4 text-center h-[80vh] flex flex-col justify-center items-center pt-24">
  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  {/* Background Image */}
  <img
    src="/images/gallery/fondo1.jpeg"
    alt="Post Cleaning Highlight"
    className="absolute inset-0 object-cover w-full h-full"
  />
  {/* Content */}
  <div className="relative z-10">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-md">
      Innova Commercial Cleaning Services
    </h1>
    <p className="mt-4 text-lg sm:text-xl text-gray-200">
      Professional cleaning solutions tailored to your needs.
    </p>
    <div className="mt-6 flex justify-center space-x-4">
      <a
        href="#services"
        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-md text-lg font-semibold hover:from-blue-600 hover:to-blue-700 shadow-lg transition-transform transform hover:scale-105"
      >
        Explore Services
      </a>
      <a
        href="/contact"
        className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-md text-lg font-semibold hover:from-green-600 hover:to-green-700 shadow-lg transition-transform transform hover:scale-105"
      >
        Contact Us
      </a>
    </div>
  </div>
</header>


      {/* Servicios Destacados */}
      <section id="services" className="py-12 px-4 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Servicio 1 */}
          <div className="bg-white shadow-md rounded-md p-6 transition-transform hover:scale-105 hover:shadow-lg">
            <img
              src="/images/services/services3.jpeg"
              alt="Office Cleaning"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Office Cleaning
            </h3>
            <p className="mt-2 text-gray-600">
              Keep your office spaces spotless and professional.
            </p>
          </div>
          {/* Servicio 2 */}
          <div className="bg-white shadow-md rounded-md p-6 transition-transform hover:scale-105 hover:shadow-lg">
            <img
              src="/images/gallery/post4.jpeg"
              alt="Retail Cleaning"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Retail Cleaning
            </h3>
            <p className="mt-2 text-gray-600">
              Clean, fresh, and welcoming retail environments.
            </p>
          </div>
          {/* Servicio 3 */}
          <div className="bg-white shadow-md rounded-md p-6 transition-transform hover:scale-105 hover:shadow-lg">
            <img
              src="/images/gallery/post11.jpeg"
              alt="Post-Construction Cleaning"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Post-Construction Cleaning
            </h3>
            <p className="mt-2 text-gray-600">
              Thorough cleaning after construction projects.
            </p>
          </div>
        </div>
      </section>

      {/* Mini Galería */}
      <section id="gallery" className="py-12 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Recent Work</h2>
        <PhotoProvider>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {images.map((src, index) => (
              <PhotoView key={index} src={src}>
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-40 object-cover rounded-md shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
        <a
          href="#additional-info"
          className="mt-8 inline-block bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
        >
          View More
        </a>
      </section>

      {/* Additional Information */}
      <section id="additional-info" className="py-12 px-4 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Additional Information</h2>
        <p className="text-gray-600 mb-4">
          At Innova Commercial Cleaning, we prioritize quality, reliability, and eco-friendly solutions for your business needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-md p-6">
            <h3 className="text-xl font-semibold text-gray-800">Flexible Scheduling</h3>
            <p className="mt-2 text-gray-600">
              We adapt to your business hours to ensure minimal disruption.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-md p-6">
            <h3 className="text-xl font-semibold text-gray-800">Experienced Team</h3>
            <p className="mt-2 text-gray-600">
              Our team is trained and equipped to handle diverse cleaning challenges.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-md p-6">
            <h3 className="text-xl font-semibold text-gray-800">Eco-Friendly Solutions</h3>
            <p className="mt-2 text-gray-600">
              We use environmentally safe cleaning products for a healthier workspace.
            </p>
          </div>
        </div>
      </section>

    
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-screen-lg mx-auto text-center">
          <h3 className="text-lg font-bold">Innova Commercial Cleaning Services</h3>
          <p className="mt-4">Business Hours: Mon-Fri: 9 AM - 6 PM | Sat: 10 AM - 4 PM</p>
          <div className="mt-6 flex justify-center space-x-4">
            <a
              href="/contact"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Contact Us
            </a>
            <a
              href="https://wa.me/16462729728"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
            >
              Contact Us on WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
