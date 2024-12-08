import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID",
};

initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();

const Reviews = () => {
  const [user, setUser] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({ comment: "", rating: "" });
  const [submitted, setSubmitted] = useState(false);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Error during Google Sign-In", error);
    }
  };

  const handleSignOut = async () => {
    await signOut(auth);
    setUser(null);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) return;

    const newReview = {
      name: user.displayName,
      photo: user.photoURL,
      comment: formData.comment,
      rating: parseInt(formData.rating, 10),
    };
    setReviews([...reviews, newReview]);
    setFormData({ comment: "", rating: "" });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header className="relative bg-gray-800 text-white text-center h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/images/gallery/fondo1.jpeg"
            alt="Reviews Background"
            className="object-cover w-full h-full opacity-60"
          />
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold drop-shadow-lg">Customer Reviews</h1>
          <p className="mt-4 text-lg text-gray-200">
            Share your experience with us and read what others have to say.
          </p>
        </div>
      </header>

      {/* Authentication */}
      <section className="py-6 px-4 text-center">
        {user ? (
          <div>
            <p className="text-gray-800">
              Logged in as <strong>{user.displayName}</strong>
            </p>
            <button
              onClick={handleSignOut}
              className="bg-red-500 text-white px-4 py-2 rounded-md mt-4"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <button
            onClick={signInWithGoogle}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Sign In with Google
          </button>
        )}
      </section>

      {/* Reviews */}
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          What They Say
        </h2>
        <div className="mb-12">
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-md p-6 mb-4 flex items-start gap-4"
              >
                <div>
                  <img
                    src={review.photo || `https://via.placeholder.com/100x100`}
                    alt={review.name}
                    className="rounded-full w-16 h-16 shadow-md"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {review.name}
                  </h3>
                  <p className="text-gray-600 mt-2">{review.comment}</p>
                  <div className="text-yellow-500 mt-2 flex">
                    {Array.from({ length: review.rating }, (_, i) => (
                      <span key={i}>★</span>
                    ))}
                    {Array.from({ length: 5 - review.rating }, (_, i) => (
                      <span key={i} className="text-gray-300">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-center">
              No reviews yet. Be the first to leave one!
            </p>
          )}
        </div>
      </section>

      {/* Submit a Review */}
      {user && (
        <section className="py-12 px-4">
          <div className="bg-white shadow-md rounded-md p-6 max-w-lg mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Leave a Review
            </h2>
            {submitted ? (
              <p className="text-green-500 font-semibold">
                Thank you for your review!
              </p>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-medium mb-2"
                    htmlFor="comment"
                  >
                    Comment
                  </label>
                  <textarea
                    id="comment"
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-medium mb-2"
                    htmlFor="rating"
                  >
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
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full"
                >
                  Submit Review
                </button>
              </form>
            )}
          </div>
        </section>
      )}

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

export default Reviews;
