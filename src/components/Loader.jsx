import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-dotted border-blue-500 rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loader;
