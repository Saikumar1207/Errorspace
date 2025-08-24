import { Link, useNavigate } from "react-router-dom";
import phishing from '../../images/phising.webp'
import password from '../../images/password.jpg'

const BellIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path strokeWidth="1.5" d="M12 22a2.5 2.5 0 0 0 2.5-2.5h-5A2.5 2.5 0 0 0 12 22Z"/>
    <path strokeWidth="1.5" d="M18 10a6 6 0 1 0-12 0c0 4-2 5-2 5h16s-2-1-2-5Z"/>
  </svg>
);

const ShieldIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path strokeWidth="1.5" d="M12 3l7 3v6c0 4.97-3.05 7.74-7 9-3.95-1.26-7-4.03-7-9V6l7-3Z"/>
    <path strokeWidth="1.5" d="M9.5 12.5l1.75 1.75L15 10.5"/>
  </svg>
);

export default function Dashboard() {
  const navigate = useNavigate();
  const progress = 60; // % complete
  const isLoggedIn = !!localStorage.getItem("token"); // check login

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login"); // redirect to login after logout
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Top Nav */}
      <header className="sticky top-0 z-10 bg-gray-50/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-lg font-semibold">ErrorSpace</h1>

          <nav className="hidden sm:flex items-center gap-8 text-sm">
            <Link className="hover:text-purple-600" to="/dashboard">Dashboard</Link>
            <Link className="hover:text-purple-600" to="/quizzes">Quizzes</Link>
            <Link className="hover:text-purple-600" to="/rewards">Rewards</Link>
            <Link to="/profile" className="hover:text-purple-600">Profile</Link>
          </nav>

          <div className="flex items-center gap-4">
            {!isLoggedIn && (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 rounded-full bg-purple-500 text-white hover:bg-purple-600 transition"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 rounded-full bg-purple-100 text-purple-700 hover:bg-purple-200 transition"
                >
                  Sign Up
                </Link>
              </>
            )}

            {isLoggedIn && (
              <>
                <button
                  className="h-9 w-9 flex items-center justify-center rounded-full bg-white border text-gray-600 hover:text-purple-600"
                  aria-label="Notifications"
                >
                  <BellIcon className="h-5 w-5" />
                </button>
                <div className="h-9 w-9 rounded-full bg-gray-300 overflow-hidden ring-2 ring-white">
                  {/* put user avatar here */}
                </div>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Page body */}
      <main className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-extrabold tracking-tight">Cyber Awareness Dashboard</h2>

        {/* Available Quizzes */}
        <section className="mt-10">
          <h3 className="text-lg font-semibold">Available Quizzes</h3>

          {/* Quiz 1 */}
          <div className="mt-6 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-sm font-semibold">Phishing Awareness Quiz</p>
              <p className="text-sm text-gray-500 mt-1">
                Test your knowledge on identifying phishing attempts.
              </p>
              <Link
                to="/quizzes/phishing"
                className="inline-block mt-4 px-4 py-2 text-sm rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
              >
                Start Quiz
              </Link>
            </div>

            <div className="justify-self-end w-full md:w-96 h-40 rounded-2xl overflow-hidden bg-gray-200">
              <img
                src={phishing}
                alt="Envelope"
                className="w-full h-full object-cover"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>
          </div>

          {/* Quiz 2 */}
          <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-sm font-semibold">Password Security Quiz</p>
              <p className="text-sm text-gray-500 mt-1">
                Learn best practices for creating and managing strong passwords.
              </p>
              <Link
                to="/quizzes/password"
                className="inline-block mt-4 px-4 py-2 text-sm rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
              >
                Start Quiz
              </Link>
            </div>

            <div className="justify-self-end w-full md:w-96 h-40 rounded-2xl overflow-hidden bg-gray-200">
              <img
                src={password}
                alt="Lock"
                className="w-full h-full object-cover"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>
          </div>
        </section>

        {/* Progress */}
        <section className="mt-12">
          <h3 className="text-lg font-semibold">Cyber Awareness Training Progress</h3>
          <div className="mt-4 flex items-center justify-between text-sm">
            <span>Cyber Awareness Training</span>
            <span className="text-gray-500">{progress}%</span>
          </div>
          <div className="mt-2 h-2 rounded-full bg-gray-200">
            <div
              className="h-2 rounded-full bg-purple-400"
              style={{ width: `${progress}%` }}
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={progress}
            />
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Complete the training to earn more coins
          </p>
        </section>

        {/* Tips */}
        <section className="mt-12">
          <h3 className="text-lg font-semibold">Cyber Awareness Tips</h3>
          <p className="mt-3 text-sm text-gray-700 leading-6 max-w-3xl">
            Stay vigilant online! Always verify the sender&apos;s email address before clicking any links
            or downloading attachments. Use strong, unique passwords for each of your accounts, and
            enable two-factor authentication whenever possible. Keep your software updated to protect
            against vulnerabilities.
          </p>
        </section>

        {/* Recent Activity */}
        <section className="mt-12">
          <h3 className="text-lg font-semibold">Recent Activity</h3>
          <ul className="mt-4 space-y-4">
            <li className="flex items-start gap-3">
              <div className="h-9 w-9 rounded-xl bg-white border flex items-center justify-center">
                <ShieldIcon className="h-5 w-5 text-gray-600" />
              </div>
              <div>
                <p className="text-sm font-medium">Earned 50 Coins</p>
                <p className="text-xs text-gray-500">Completed Phishing Awareness Quiz</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="h-9 w-9 rounded-xl bg-white border flex items-center justify-center">
                <ShieldIcon className="h-5 w-5 text-gray-600" />
              </div>
              <div>
                <p className="text-sm font-medium">In Progress</p>
                <p className="text-xs text-purple-600">Started Password Security Quiz</p>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
