import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100">
      {/* Introducción */}
      <header className="bg-gray-800 text-white py-12 text-center">
        <h1 className="text-4xl font-bold">Welcome to Innova Commercial Cleaning Services</h1>
        <p className="text-lg mt-4">
          We provide top-notch cleaning services for your business needs.
        </p>
      </header>

      {/* Servicios Destacados */}
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-md p-6">
            <h3 className="text-xl font-semibold">Office Cleaning</h3>
            <p className="mt-2 text-gray-600">Professional cleaning for office spaces.</p>
          </div>
          <div className="bg-white shadow-md rounded-md p-6">
            <h3 className="text-xl font-semibold">Retail Cleaning</h3>
            <p className="mt-2 text-gray-600">Keep your retail space spotless and welcoming.</p>
          </div>
          <div className="bg-white shadow-md rounded-md p-6">
            <h3 className="text-xl font-semibold">Post-Construction Cleaning</h3>
            <p className="mt-2 text-gray-600">Clean up after construction projects.</p>
          </div>
        </div>
      </section>

      {/* Promoción */}
      <section className="bg-yellow-500 text-white py-8 text-center">
        <h2 className="text-3xl font-bold">Special Offer</h2>
        <p className="text-lg mt-4">Get 20% off your first cleaning service!</p>
      </section>

      {/* Horarios */}
      <section className="py-8 px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Business Hours</h2>
        <p className="mt-2 text-gray-600">Monday to Friday: 9:00 AM - 6:00 PM</p>
        <p className="mt-2 text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
      </section>

      {/* Botones de Acceso Rápido */}
      <section className="py-8 px-4 text-center">
        <button className="bg-blue-500 text-white py-2 px-6 rounded-md mr-4">
          Request Callback
        </button>
        <button className="bg-green-500 text-white py-2 px-6 rounded-md">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default Home;
