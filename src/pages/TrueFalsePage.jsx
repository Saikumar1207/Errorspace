// src/pages/TrueFalsePage.jsx
import React from "react";

const TrueFalsePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 border-b">
        <h1 className="text-lg font-bold">ErrorSpace</h1>
        <img
          src="https://i.pravatar.cc/40"
          alt="user"
          className="w-10 h-10 rounded-full"
        />
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-500 mb-6">
          <span className="text-indigo-600 cursor-pointer">Learn</span> / Quiz
        </p>

        {/* Question */}
        <h2 className="text-2xl font-bold mb-4">True or False</h2>
        <div className="bg-gray-50 border rounded-lg p-6 h-32 mb-6"></div>

        {/* True/False Options */}
        <div className="flex w-full border rounded-lg overflow-hidden">
          <label className="flex-1 text-center py-3 cursor-pointer hover:bg-gray-100">
            <input
              type="radio"
              name="truefalse"
              className="hidden"
              defaultChecked
            />
            <span className="font-medium">True</span>
          </label>
          <label className="flex-1 text-center py-3 cursor-pointer hover:bg-gray-100 border-l">
            <input type="radio" name="truefalse" className="hidden" />
            <span className="font-medium">False</span>
          </label>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-10">
          <button className="px-5 py-2 bg-gray-100 text-gray-700 rounded-lg">
            Previous
          </button>
          <button className="px-5 py-2 bg-indigo-500 text-white rounded-lg">
            Next
          </button>
        </div>
      </main>
    </div>
  );
};

export default TrueFalsePage;
