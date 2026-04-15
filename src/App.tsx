import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from "./Authentication/students/Login";
import Register from "./Authentication/students/Register";
import Footer from "./common/components/Footer";
import Navbar from "./common/components/Navbar";
import Home from "./common/components/HomePage";

const Layout = () => {
  const location = useLocation();

  // Routes where navbar should NOT show
  const hideNavbar = ["/login", "/register"].includes(location.pathname);

  return (
    <div className="w-full text-4xl">
      {!hideNavbar && <Navbar />} {/*  conditional */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {/* Optional */}
      {!hideNavbar && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

export default App;
