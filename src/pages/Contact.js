import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Crear el enlace mailto
    const mailtoLink = `mailto:generalmanager@innovacleanllc.com?subject=Contact%20from%20${encodeURIComponent(
      name
    )}&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(
      email
    )}%0AMessage:%20${encodeURIComponent(message)}`;
    
    // Abrir el cliente de correo predeterminado
    window.location.href = mailtoLink;
  };

  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header className="relative bg-gray-800 text-white text-center h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/images/gallery/fondo1.jpeg"
            alt="Contact Us Background"
            className="object-cover w-full h-full opacity-60"
          />
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-200">
            We're here to help. Reach out to us today!
          </p>
        </div>
      </header>

      {/* Contact Form and Map */}
      <div className="py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form */}
          <div className="bg-white shadow-lg rounded-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="bg-white shadow-lg rounded-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Location</h2>
            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193736.0720636108!2d-74.25159074214737!3d40.5795314745287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c244c2a3b4998d%3A0xe6dbefce29e8335e!2sStaten%20Island%2C%20NY!5e0!3m2!1sen!2sus!4v1685629273848!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

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

export default Contact;
