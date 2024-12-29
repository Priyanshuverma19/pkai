import { useAuth } from '@clerk/clerk-react';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';

const Chatlist = ({ onClose }) => {
  
  const { getToken } = useAuth(); // Get Clerk's token retrieval method

  const { isLoading, error, data } = useQuery({
    queryKey: ["userChats"],
    queryFn: async () => {
      const token = await getToken(); // Get the token
      return fetch(`${import.meta.env.VITE_API_URL}/api/userchats`, {
        credentials: "include",
        headers: {
          Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
        },
      }).then((res) => {
        if (!res.ok) {
          return res.json().then((err) => {
            throw new Error(err.error || "Failed to fetch chats");
          });
        }
        return res.json();
      });
    },
  });

  return (
    <div className="flex flex-col gap-4 h-[calc(100vh-44px)] bg-[#2c2937] p-4">
  <span className="text-2xl text-gray-100 font-semibold p-1">Dashboard</span>
  <div className="flex flex-col px-2 gap-3 font-medium">
    <Link
      to="/dashboard"
      className="text-md text-gray-300 hover:bg-[#3b3b46] rounded-md p-2 transition duration-200"
      onClick={onClose}
    >
      Create a new chat
    </Link>
    <Link
      to="/"
      className="text-md text-gray-300 hover:bg-[#3b3b46] rounded-md p-2 transition duration-200"
      onClick={onClose}
    >
      Explore PK AI
    </Link>
    <Link
      to="/"
      className="text-md text-gray-300 hover:bg-[#3b3b46] rounded-md p-2 transition duration-200"
      onClick={onClose}
    >
      Contact
    </Link>
  </div>
  <hr className="h-[1px] bg-gray-600 opacity-50" />
  <span className="text-xl text-gray-300 font-semibold p-1">Recent Chats</span>
  <div className="flex flex-col overflow-y-auto h-2/3 gap-1.5 px-2">
    {isLoading
      ? <Loader/>
      : error
      ? error.message
      : data?.map((chat) => (
          <Link
            to={`/dashboard/chats/${chat._id}`}
            key={chat._id}
            className="text-gray-300 hover:bg-[#3b3b46] p-2 rounded-md transition duration-200"
            onClick={onClose}
          >
            {chat.title}
          </Link>
        ))}
  </div>
  <hr className="h-[1px] bg-gray-600 opacity-50" />
  <div className="flex items-center mt-4">
    <img src="/logo.png" alt="Logo" className="w-8 h-8 hidden lg:block rounded-full" />
    <div className="flex flex-col ml-4">
      <span className="text-lg lg:text-sm text-white font-bold">Upgrade to Pro</span>
      <span className="text-sm text-gray-300">Get unlimited access to all features</span>
    </div>
  </div>
</div>

  );
};


export default Chatlist;
