import React, { useState } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState([
    { name: 'Jane Doe', comment: 'Excellent service!', rating: 5 },
    { name: 'John Smith', comment: 'Very professional and thorough.', rating: 4 },
  ]);
  const [formData, setFormData] = useState({ name: '', comment: '', rating: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, { ...formData, rating: parseInt(formData.rating, 10) }]);
    setFormData({ name: '', comment: '', rating: '' });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-gray-100 py-12 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Customer Reviews</h1>

      {/* Lista de Reseñas */}
      <div className="mb-12">
  {reviews.length > 0 ? (
    reviews.map((review, index) => (
      <div
        key={index}
        className="bg-white shadow-md rounded-md p-6 mb-4 flex items-start gap-4"
      >
        <div>
          <img
            src={`https://via.placeholder.com/100x100?text=${review.name[0]}`}
            alt={review.name}
            className="rounded-full w-16 h-16 shadow-md"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800">{review.name}</h3>
          <p className="text-gray-600 mt-2">{review.comment}</p>
          <div className="text-yellow-500 mt-2 flex">
            {Array.from({ length: review.rating }, (_, i) => (
              <span key={i}>★</span>
            ))}
            {Array.from({ length: 5 - review.rating }, (_, i) => (
              <span key={i} className="text-gray-300">★</span>
            ))}
          </div>
        </div>
      </div>
    ))
  ) : (
    <p className="text-gray-600">No reviews yet. Be the first to leave one!</p>
  )}
</div>
<section className="mt-12">
  <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Work</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <img
      src="/images/post-cleaning1.jpg"
      alt="Post Cleaning 1"
      className="rounded-md shadow-md"
    />
    <img
      src="/images/post-cleaning2.jpg"
      alt="Post Cleaning 2"
      className="rounded-md shadow-md"
    />
    <img
      src="/images/post-cleaning3.jpg"
      alt="Post Cleaning 3"
      className="rounded-md shadow-md"
    />
    {/* Añade más imágenes según sea necesario */}
  </div>
</section>


      {/* Formulario de Nueva Reseña */}
      <div className="bg-white shadow-md rounded-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Leave a Review</h2>
        {submitted ? (
          <p className="text-green-500 font-semibold">Thank you for your review!</p>
        ) : (
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
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="comment">
                Comment
              </label>
              <textarea
                id="comment"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="rating">
                Rating (1-5)
              </label>
              <input
                type="number"
                id="rating"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                min="1"
                max="5"
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Submit Review
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Reviews;
