import React from 'react';

const Services = () => {
  const services = [
    {
      name: "Office Cleaning",
      description: "Keep your office space clean and professional with our expert services.",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Retail Cleaning",
      description: "Ensure your retail space remains spotless and inviting for customers.",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Post-Construction Cleaning",
      description: "We handle the mess after construction projects, leaving the area spotless.",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Carpet Cleaning",
      description: "Restore and refresh your carpets with our deep-cleaning solutions.",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="bg-gray-100 py-12 px-4">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Our Services</h1>
        <p className="text-lg text-gray-600 mt-4">
          Explore the wide range of cleaning solutions we offer for your business needs.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-md overflow-hidden"
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                {service.name}
              </h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
