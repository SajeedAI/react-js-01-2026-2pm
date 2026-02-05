import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Classes from "../pages/Classes/Classes";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/classes" element={<Classes />} />
    </Routes>
  );
}
