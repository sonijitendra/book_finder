import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SellerDashboard from "./pages/SellerDashboard";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="min-h-screen">
      <nav className="bg-white shadow px-4 py-3 flex justify-between">
        <Link to="/" className="font-bold text-xl">Tinor</Link>
        <div className="space-x-4">
          <Link to="/seller" className="text-gray-600 hover:text-gray-900">Seller</Link>
          <Link to="/login" className="text-gray-600 hover:text-gray-900">Login</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/seller" element={<SellerDashboard />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
