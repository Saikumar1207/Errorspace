
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Quizzes from "./pages/Quizzes";
import Choice from "./pages/Choice";
import TrueFalsePage from "./pages/TrueFalsePage";
import Rewards from "./pages/Rewards";
import LeaderBoardPage from "./pages/LeaderBoardPage";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/choice" element={<Choice />} />
        <Route path="/truefalse" element={<TrueFalsePage />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/leaderboard" element={<LeaderBoardPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
