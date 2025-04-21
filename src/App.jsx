import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Publications from "./pages/Publications";

function App() {
  return (
    <div className="cormorant-garamond-regular text-lg">
      <Header />
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <div className="sticky top-0 left-0">
            <Sidebar />
          </div>
        </div>
        <div className="col-span-6 pl-10 py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Home />} />
            <Route path="/publications" element={<Publications />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
