import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Create";
import Hero from "./Hero";
import Edit from "./Edit.jsx";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;