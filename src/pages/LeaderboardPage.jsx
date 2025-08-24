// src/pages/LeaderboardPage.jsx
import React from "react";
import { Link } from "react-router-dom";

const LeaderboardPage = () => {
  const activities = [
    {
      activity: "Quiz: Introduction to Blockchain",
      date: "July 15, 2024",
      reward: "+10 Vitacoin",
    },
    {
      activity: "Forum Post: Discussion on Crypto Trends",
      date: "July 16, 2024",
      reward: "+5 Vitacoin",
    },
    {
      activity: "Quiz: Advanced Trading Strategies",
      date: "July 18, 2024",
      reward: "+15 Vitacoin",
    },
    {
      activity: "Forum Post: Sharing Investment Tips",
      date: "July 20, 2024",
      reward: "+5 Vitacoin",
    },
    {
      activity: "Quiz: Understanding DeFi",
      date: "July 22, 2024",
      reward: "+12 Vitacoin",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 border-b">
        <h1 className="text-lg font-bold">ErrorSpace</h1>
        <nav className="flex items-center space-x-6 text-gray-700">
          <Link to="/dashboard" className="hover:text-indigo-600">
            Dashboard
          </Link>
          <Link to="/quizzes" className="hover:text-indigo-600">
            Quizzes
          </Link>
          <Link to="/rewards" className="hover:text-indigo-600">
            Rewards
          </Link>
          <Link to="/leaderboardPage" className="text-indigo-600 font-medium">
            Leaderboard
          </Link>
          <Link to="/profile" className="hover:text-indigo-600">
            Profile
          </Link>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">🔔</button>
            <img
              src="https://i.pravatar.cc/40"
              alt="user"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </nav>
      </header>

      {/* Leaderboard Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-2">Leaderboard</h2>
        <p className="text-indigo-600 mb-8">
          See who’s earning the most Vitacoin by completing quizzes and
          participating in the forum.
        </p>

        <h3 className="text-xl font-semibold mb-4">Top Activities</h3>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="text-left px-6 py-3">Activity</th>
                <th className="text-left px-6 py-3">Date</th>
                <th className="text-left px-6 py-3">Vitacoin Earned</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {activities.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{item.activity}</td>
                  <td className="px-6 py-4 text-indigo-600 cursor-pointer">
                    {item.date}
                  </td>
                  <td className="px-6 py-4 text-indigo-600 font-medium">
                    {item.reward}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default LeaderboardPage;
