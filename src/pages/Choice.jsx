// src/pages/QuizPage.jsx
import React from "react";

const QuizPage = () => {
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

      {/* Quiz Content */}
      <main className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-2">Quiz</h2>
        <p className="text-gray-600 mb-6">Question 1 of 5</p>

        {/* Question Box */}
        <div className="bg-gray-50 border rounded-lg p-6 h-32 mb-6"></div>

        {/* Options */}
        <div className="space-y-4">
          {["Option 1", "Option 2", "Option 3", "Option 4"].map(
            (option, idx) => (
              <label
                key={idx}
                className="flex items-center border rounded-lg px-4 py-3 cursor-pointer hover:bg-gray-100"
              >
                <input
                  type="radio"
                  name="quiz"
                  className="form-radio text-indigo-600 mr-3"
                  defaultChecked={idx === 0}
                />
                <span>{option}</span>
              </label>
            )
          )}
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

export default QuizPage;
