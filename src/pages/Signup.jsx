import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-gray-50 shadow-sm">
        <h1 className="text-xl font-bold text-gray-900">Errorspace</h1>
        <div className="flex items-center space-x-6">
          <Link to="/dashboard" className="text-gray-700 hover:text-gray-900">
            Dashboard
          </Link>
          <Link to="/quizzes" className="text-gray-700 hover:text-gray-900">
            Quizzes
          </Link>
          <Link to="/rewards" className="text-gray-700 hover:text-gray-900">
            Rewards
          </Link>
          <Link to="/profile" className="text-gray-700 hover:text-gray-900">
            Profile
          </Link>
          <Link
            to="/login"
            className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium px-4 py-2 rounded-full"
          >
            Log In
          </Link>
        </div>
      </nav>

      {/* Signup form */}
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Create Your Account
          </h2>
          <form className="space-y-5">
            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                className="mt-2 w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-2 w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="mt-2 w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 bg-purple-500 text-white font-semibold rounded-full hover:bg-purple-600 transition"
            >
              Sign Up
            </button>
          </form>

          {/* Already have an account */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-purple-500 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
