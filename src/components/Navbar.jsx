import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-dark-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/assets/rojgar logo1_page-0001.jpg"
              alt="Rojgar Setu - Labour Booking"
              className="h-10 w-auto object-contain"
            />
          </Link>
          <div className="flex items-center gap-4">
            {user ? (
              <>
                <Link
                  to={user.role === "customer" ? "/customer" : "/labour"}
                  className="text-sm hover:text-primary-300 transition"
                >
                  Dashboard
                </Link>
                {user.role === "customer" && (
                  <Link
                    to="/customer/bookings"
                    className="text-sm hover:text-primary-300 transition"
                  >
                    My Bookings
                  </Link>
                )}
                {user.role === "labour" && (
                  <Link
                    to="/labour/profile"
                    className="text-sm hover:text-primary-300 transition"
                  >
                    Profile
                  </Link>
                )}
                <span className="text-primary-300 text-sm">{user.name}</span>
                <button
                  onClick={handleLogout}
                  className="bg-primary-600 hover:bg-primary-500 px-4 py-2 rounded-lg text-sm font-medium transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-sm hover:text-primary-300 transition"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-primary-600 hover:bg-primary-500 px-4 py-2 rounded-lg text-sm font-medium transition"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
