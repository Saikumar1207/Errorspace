import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 border-b">
        <h1 className="text-xl font-bold">ErrorSpace</h1>
        <div className="flex gap-6 items-center">
          <Link to="/dashboard" className="hover:text-purple-600">Dashboard</Link>
          <Link to="/quizzes" className="hover:text-purple-600">Quizzes</Link>
          <Link to="/rewards" className="hover:text-purple-600">Rewards</Link>
          <Link to="/profile" className="hover:text-purple-600">Profile</Link>
          <Link
            to="/signup"
            className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-medium hover:bg-purple-200"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Login Form Box */}
      <main className="flex flex-col items-center justify-center flex-grow">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back!</h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Username"
              className="px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button
              type="submit"
              className="bg-purple-500 text-white py-3 rounded-full hover:bg-purple-600"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-sm text-center">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-purple-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Login;
