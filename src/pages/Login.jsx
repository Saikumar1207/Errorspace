import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token); // Save JWT token
        console.log("Login successful:", data);
        navigate("/dashboard"); // redirect to dashboard
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      setError("Server error");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 border-b">
        <h1 className="text-xl font-bold">ErrorSpace</h1>
        <Link
          to="/signup"
          className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-medium hover:bg-purple-200"
        >
          Sign Up
        </Link>
      </nav>

      {/* Login Form Box */}
      <main className="flex flex-col items-center justify-center flex-grow">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back!</h2>
          <form className="flex flex-col gap-4" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
            <button
              type="submit"
              className="bg-purple-500 text-white py-3 rounded-full hover:bg-purple-600"
            >
              Login
            </button>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
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
