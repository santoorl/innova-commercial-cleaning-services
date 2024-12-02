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
              className="bg-white shadow-md rounded-md p-4 mb-4"
            >
              <h3 className="text-xl font-bold text-gray-800">{review.name}</h3>
              <p className="text-gray-600">{review.comment}</p>
              <div className="text-yellow-500">
                {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No reviews yet. Be the first to leave one!</p>
        )}
      </div>

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
