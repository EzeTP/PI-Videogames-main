import "./App.scss";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import LandingPage from "./pages/landingpage/LandingPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path={"/"} element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
