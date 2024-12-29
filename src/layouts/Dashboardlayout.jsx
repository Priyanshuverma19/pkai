
import { useAuth } from '@clerk/clerk-react';
import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Chatlist from '../components/Chatlist';
import Loader from '../components/Loader';

const Dashboardlayout = () => {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();

  // State for managing the visibility of the Chatlist on small screens
  const [isChatlistOpen, setIsChatlistOpen] = useState(false);

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
  }, [isLoaded, userId, navigate]);

  if (!isLoaded) return <Loader/>;

  return (
    <div className="flex h-[calc(100%-75px)]">
      {/* Hamburger Menu for small screens */}
      <button
        className={`lg:hidden fixed top-8  z-50 text-white text-2xl bg-gray-800 rounded-full p-2 ${isChatlistOpen ? 'hidden' : ''}`}
        onClick={() => setIsChatlistOpen(true)}
      >
        &#9776; {/* Hamburger icon */}
      </button>

      {/* Chatlist */}
      <div
        className={`fixed inset-0 z-40 lg:relative bg-gray-900 transition-transform duration-300 transform ${
          isChatlistOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 w-3/4 lg:w-1/5`}
      >
        {/* Close Icon */}
        {isChatlistOpen && (
          <button
            className="lg:hidden absolute top-4 right-4 text-white text-3xl font-bold z-50"
            onClick={() => setIsChatlistOpen(false)}
          >
            &times; {/* Close icon */}
          </button>
        )}

        <Chatlist onClose={() => setIsChatlistOpen(false)} />
      </div>

      {/* Main Content */}
      <div className="w-full lg:w-4/5 bg-[#12101b]">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboardlayout;
