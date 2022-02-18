import "./App.scss";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import LandingPage from "./pages/landingpage/LandingPage";
import DetailPage from "./components/gamedetail/GameDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path={"/"} element={<LandingPage />} />
        <Route path={"/detail/:id"} element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
