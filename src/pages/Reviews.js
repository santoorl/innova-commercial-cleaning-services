import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRZxmP16MPgStVJ4WuvAMqY1EVz_2ohHk",
  authDomain: "innova-reviews-63fb7.firebaseapp.com",
  projectId: "innova-reviews-63fb7",
  storageBucket: "innova-reviews-63fb7.appspot.com",
  messagingSenderId: "1060069462082",
  appId: "1:1060069462082:web:7edf42bd2bd2d2536edddb",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

const Reviews = () => {
  const [user, setUser] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsCollection = collection(db, "reviews");
        const q = query(reviewsCollection, orderBy("timestamp", "desc"));
        const reviewSnapshot = await getDocs(q);
        const reviewsList = reviewSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setReviews(reviewsList);

        if (reviewsList.length > 0) {
          const totalRating = reviewsList.reduce((sum, review) => sum + review.rating, 0);
          setAverageRating((totalRating / reviewsList.length).toFixed(1));
        } else {
          setAverageRating(0);
        }
      } catch (error) {
        console.error("Error al obtener reseñas:", error);
      }
    };

    fetchReviews();
  }, []);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
    }
  };

  const handleSignOut = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <div className="bg-gray-100">
      <header className="relative bg-gray-800 text-white text-center h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="/images/gallery/fondo1.jpeg" alt="Reviews Background" className="object-cover w-full h-full opacity-60" />
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold drop-shadow-lg">Customer Reviews</h1>
          <p className="mt-4 text-lg text-gray-200">Share your experience with us and read what others have to say.</p>
          {averageRating > 0 && <p className="mt-2 text-xl font-bold">⭐ {averageRating} / 5</p>}
        </div>
      </header>

      <section className="py-6 px-4 text-center">
        {user ? (
          <div>
            <p className="text-gray-800">Logged in as <strong>{user.displayName}</strong></p>
            <button onClick={handleSignOut} className="bg-red-500 text-white px-4 py-2 rounded-md mt-4">Sign Out</button>
          </div>
        ) : (
          <button onClick={signInWithGoogle} className="bg-blue-500 text-white px-4 py-2 rounded-md">Sign In with Google</button>
        )}
      </section>

      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">What They Say</h2>
        <div className="mb-12">
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <div key={review.id} className="bg-white shadow-md rounded-md p-6 mb-4 flex items-start gap-4">
                <div>
                  <img src={review.photo || `https://via.placeholder.com/100x100`} alt={review.name} className="rounded-full w-16 h-16 shadow-md"/>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{review.name}</h3>
                  <p className="text-gray-600 mt-2">{review.comment}</p>
                  <p className="text-yellow-500 mt-2">⭐ {review.rating} / 5</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-center">No reviews yet. Be the first to leave one!</p>
          )}
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-screen-lg mx-auto text-center">
          <h3 className="text-lg font-bold">Innova Commercial Cleaning Services</h3>
          <p className="mt-4">Business Hours: Mon-Fri: 9 AM - 6 PM | Sat: 10 AM - 4 PM</p>
          <div className="mt-6 flex justify-center space-x-4">
            <a href="/contact" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Contact Us</a>
            <a href="https://wa.me/16462729728" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">WhatsApp</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Reviews;
