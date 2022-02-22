import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import LandingPage from "./pages/landingpage/LandingPage";
import DetailPage from "./components/gamedetail/GameDetail";
import CreateGame from "./components/createGame/CreateGame";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path={"/detail/:id"} element={<DetailPage />} />
        <Route path={"/create"} element={<CreateGame />} />
      </Routes>
    </div>
  );
}

export default App;
