import React from 'react';
import Slider from 'react-slick';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import moveInMoveOutImages from '../utils/loadMoveImages';


const services = [
  {
    name: "Office Cleaning",
    description: "Keep your office space clean and professional with our expert services.",
    images: [
      "/images/services/office1.jpg",
      "/images/services/office2.jpg",
      "/images/services/office3.jpg",
      "/images/services/office4.jpg",
      "/images/services/office5.jpg",
      "/images/services/office6.jpg",
      "/images/services/office7.jpg",
      "/images/services/office8.jpg",
      "/images/services/office9.jpg",
      "/images/services/office10.jpg",
    ],
  },
  {
    name: "Retail Cleaning",
    description: "Ensure your retail space remains spotless and inviting for customers.",
    images: [
      "/images/services/retail1.jpg",
      "/images/services/retail2.jpg",
      "/images/services/retail3.jpg",
      "/images/services/retail4.jpg",
      "/images/services/retail5.jpg",
      "/images/services/retail6.jpg",
      "/images/services/retail7.jpg",
      "/images/services/retail8.jpg",
      "/images/services/retail9.jpg",
      "/images/services/retail10.jpg",
    ],
  },
  {
    name: "Post-Construction Cleaning",
    description: "We handle the mess after construction projects, leaving the area spotless.",
    images: [
      "/images/services/post1.jpg",
      "/images/services/post2.jpg",
      "/images/services/post3.jpg",
      "/images/services/post4.jpg",
      "/images/services/post5.jpg",
      "/images/services/post6.jpg",
      "/images/services/post7.jpg",
      "/images/services/post8.jpg",
      "/images/services/post9.jpg",
      "/images/services/post10.jpg",
    ],
  },
  {
    name: "Carpet Cleaning",
    description: "Restore and refresh your carpets with our deep-cleaning solutions.",
    images: [
      "/images/services/carpet1.jpg",
      "/images/services/carpet2.jpg",
      "/images/services/carpet3.jpg",
      "/images/services/carpet4.jpg",
      "/images/services/carpet5.jpg",
      "/images/services/carpet6.jpg",
      "/images/services/carpet7.jpg",
    ],
  },
  {
    name: "Move In & Move Out Cleaning",
    description: "Deep cleaning for people who are moving in or out of a property.",
    images: moveInMoveOutImages,
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const Services = () => {
  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header className="relative bg-gray-800 text-white text-center h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/images/gallery/fondo1.jpeg"
            alt="Services Background"
            className="object-cover w-full h-full opacity-70"
          />
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold drop-shadow-lg">Our Services</h1>
          <p className="mt-4 text-lg text-gray-200">
            Professional solutions for all your commercial cleaning needs.
          </p>
        </div>
      </header>

      {/* Explore Services */}
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Explore Our Services
        </h2>
        <div className="text-center mb-8">
          <a
            href="/contact"
            className="inline-block bg-green-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-green-600 transition duration-300"
          >
            Contact Us
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Carousel with PhotoView */}
              <PhotoProvider>
                <Slider {...sliderSettings}>
                  {service.images.map((image, imgIndex) => (
                    <div key={imgIndex}>
                      <PhotoView src={image}>
                        <img
                          src={image}
                          alt={`${service.name} ${imgIndex + 1}`}
                          className="w-full h-64 object-cover cursor-pointer"
                        />
                      </PhotoView>
                    </div>
                  ))}
                </Slider>
              </PhotoProvider>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
              </div>
            </div>
          ))}
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

export default Services;
