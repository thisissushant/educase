import "./App.css";
import { LandingScreen } from "./components/LandingScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginScreen } from "./components/LoginScreen";
import { SignUpScreen } from "./components/SignUpScreen";
import { Profile } from "./components/Profile";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignUpScreen />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
