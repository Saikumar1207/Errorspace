import { Link } from "react-router-dom";
import phishing from '../../images/phising.webp'
import password from '../../images/password.jpg'

const BellIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path strokeWidth="1.5" d="M12 22a2.5 2.5 0 0 0 2.5-2.5h-5A2.5 2.5 0 0 0 12 22Z"/>
    <path strokeWidth="1.5" d="M18 10a6 6 0 1 0-12 0c0 4-2 5-2 5h16s-2-1-2-5Z"/>
  </svg>
);

export default function Quizzes() {
  const quizzes = [
    {
      key: "phishing",
      title: "Phishing Awareness Quiz",
      desc: "Learn to identify and avoid phishing attempts.",
      reward: 50,
      img: "/images/envelope.png",
    },
    {
      key: "password",
      title: "Password Security Quiz",
      desc: "Test your knowledge on creating strong passwords and managing them securely.",
      reward: 40,
      img: "/images/phone.png",
    },
    {
      key: "data",
      title: "Data Protection Quiz",
      desc: "Understand how to protect your personal data online and offline.",
      reward: 60,
      img: "/images/data.png",
    },
    {
      key: "social",
      title: "Social Engineering Quiz",
      desc: "Learn about social engineering tactics and how to defend against them.",
      reward: 55,
      img: "/images/social.png",
    },
    {
      key: "malware",
      title: "Malware Awareness Quiz",
      desc: "Identify different types of malware and how to prevent infections.",
      reward: 45,
      img: "/images/malware.png",
    },
  ];

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
            <Link className="hover:text-purple-600" to="/profile">Profile</Link>
            <Link className="hover:text-purple-600" to="/leaderboard">Leaderboard</Link>
          </nav>

          <div className="flex items-center gap-4">
            <button className="h-9 w-9 flex items-center justify-center rounded-full bg-white border">
              <BellIcon className="h-5 w-5 text-gray-600" />
            </button>
            <div className="h-9 w-9 rounded-full bg-gray-300 ring-2 ring-white" />
          </div>
        </div>
      </header>

      {/* Page Body */}
      <main className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-extrabold tracking-tight">Cybersecurity Quizzes</h2>
        <p className="text-sm text-purple-600 mt-2">
          Test your knowledge and earn Vitacoin rewards!
        </p>

        {/* Rows */}
        <div className="mt-8 space-y-10">
          {quizzes.map((q) => (
            <div
              key={q.key}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              {/* Left: text */}
              <div>
                <p className="text-sm font-semibold">{q.title}</p>
                <p className="text-sm text-gray-600 mt-1">
                  {q.desc}{" "}
                  <span className="text-purple-600">
                    Earn {q.reward} Vitacoin upon completion.
                  </span>
                </p>
                <Link
                  to={`/quizzes/${q.key}`}
                  className="inline-block mt-4 px-4 py-2 text-sm rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
                >
                  Start Quiz
                </Link>
              </div>

              {/* Right: image */}
              <div className="justify-self-end w-full md:w-96 h-40 rounded-2xl overflow-hidden bg-gray-200">
                <img
                                src={password}
                                alt="Lock"
                                className="w-full h-full object-cover"
                                onError={(e) => (e.currentTarget.style.display = "none")}
                              />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
