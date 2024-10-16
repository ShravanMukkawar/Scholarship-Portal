"use client"; 

import { useState } from 'react';

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmitFeedback = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', feedback);
    setFeedback('');
    setIsModalOpen(false);
  };

  return (
    <footer className="bg-gray-800 text-white py-8 mt-10">
      <div className="container mx-auto text-center">
        <p className="mb-4 text-gray-400">
          We are a dedicated NGO working towards making a difference in our community. Our mission is to provide support and resources to those in need and create positive change.
        </p>
        <div className="mb-6">
          <a
            href="/donation"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mr-4"
          >
            Donate Now
          </a>
          <a
            href="#volunteer"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg"
          >
            Volunteer
          </a>
        </div>
        <div className="mb-6">
          <p className="mb-2">Follow Us:</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-gray-400">Facebook</a>
            <a href="#" className="hover:text-gray-400">Twitter</a>
            <a href="#" className="hover:text-gray-400">Instagram</a>
            <a href="#" className="hover:text-gray-400">LinkedIn</a>
          </div>
        </div>
        <div className="mb-6">
          <p className="mb-2">Contact Us:</p>
          <p className="mb-2">Email: <a href="mailto:contact@ngo.org" className="hover:text-gray-400">contact@ngo.org</a></p>
          <p className="mb-2">Phone: (123) 456-7890</p>
        </div>
        <div className="mb-6">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
          >
            Give Feedback
          </button>
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white text-gray-900 p-6 rounded-lg w-full max-w-md">
              <h3 className="text-xl font-bold mb-4">Feedback</h3>
              <form onSubmit={handleSubmitFeedback}>
                <textarea
                  value={feedback}
                  onChange={handleFeedbackChange}
                  rows="4"
                  className="w-full border border-gray-300 rounded-lg p-2 mb-4"
                  placeholder="Share your feedback here..."
                  required
                ></textarea>
                <div className="flex justify-between">
                  <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400">Terms of Service</a>
        </div>
        <p className="mt-6 mb-4 text-gray-400">© 2024 NGO Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
}