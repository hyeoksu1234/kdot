import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Data from "./pages/DataPage";
import Menu from "./pages/MenuPage";
import Tech from "./pages/TechPage";
import Offline from "./pages/OfflinePage";
import Custom from "./pages/CustomPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/data" element={<Data />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/tech" element={<Tech />} />
      <Route path="/offline" element={<Offline />} />
      <Route path="/custom" element={<Custom />} />
    </Routes>
  );
}
