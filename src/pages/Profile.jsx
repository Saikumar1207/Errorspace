// src/pages/ProfilePage.jsx
import React from "react";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const activities = [
    {
      icon: "🏆",
      title: "Reward from contest",
      detail: "Received 50 VTC",
    },
    {
      icon: "↗️",
      title: "Payment to user",
      detail: "Sent 100 VTC",
    },
    {
      icon: "✅",
      title: "Payment from user",
      detail: "Received 200 VTC",
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
          <Link to="/rewards" className="hover:text-indigo-600">
            Rewards
          </Link>
          <Link to="/quizzes" className="hover:text-indigo-600">
            Quizzes
          </Link>
          <Link to="/leaderboard" className="hover:text-indigo-600">
            Leaderboard
          </Link>
          <Link to="/profile" className="text-indigo-600 font-medium">
            Profile
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-purple-50 px-3 py-1 rounded-lg">
            <span className="text-sm text-gray-500">🔍</span>
            <input
              type="text"
              placeholder="Search"
              className="ml-2 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
            />
          </div>
          <button className="p-2 rounded-full hover:bg-gray-100">🔔</button>
          <img
            src="https://i.pravatar.cc/40"
            alt="user"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </header>

      {/* Profile Content */}
      <main className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold mb-2">Your Profile</h2>
        <p className="text-gray-600 mb-8">
          Manage your account settings and view your activity.
        </p>

        {/* Profile Card */}
        <div className="flex items-center gap-6 mb-8">
          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
            className="w-24 h-24 rounded-full border"
          />
          <div>
            <h3 className="text-xl font-semibold">Sophia Clark</h3>
            <p className="text-gray-500">@sophia_clark</p>
            <p className="text-gray-400 text-sm">Joined in 2021</p>
          </div>
          <button className="ml-auto px-6 py-2 rounded-md bg-gray-200 hover:bg-gray-300">
            Edit Profile
          </button>
        </div>

        {/* Balance */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold mb-2">Vitacoin Balance</h3>
          <div className="bg-purple-100 rounded-lg p-6">
            <p className="text-sm text-gray-500">Balance</p>
            <p className="text-2xl font-bold">1,250 VTC</p>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold mb-4">Achievements</h3>
          <div className="grid grid-cols-3 gap-6">
            <img
              src="https://via.placeholder.com/200x200.png?text=Badge+1"
              alt="badge1"
              className="rounded-lg shadow"
            />
            <img
              src="https://via.placeholder.com/200x200.png?text=Badge+2"
              alt="badge2"
              className="rounded-lg shadow"
            />
            <img
              src="https://via.placeholder.com/200x200.png?text=Badge+3"
              alt="badge3"
              className="rounded-lg shadow"
            />
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {activities.map((act, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-purple-50 p-4 rounded-lg"
              >
                <div className="text-2xl">{act.icon}</div>
                <div>
                  <p className="font-medium">{act.title}</p>
                  <p className="text-sm text-indigo-600">{act.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
