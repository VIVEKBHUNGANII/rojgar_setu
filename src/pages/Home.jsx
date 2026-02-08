import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="min-h-[calc(100vh-12rem)] flex flex-col">
      <section className="bg-gradient-to-br from-primary-900 via-dark-800 to-dark-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Book Skilled Services, On Demand
          </h1>
          <p className="text-primary-200 text-lg mb-8 max-w-2xl mx-auto">
            Plumbers, electricians, carpenters, painters and more – one tap
            away. Academic project demo.
          </p>
          {!user ? (
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/register"
                className="bg-primary-500 hover:bg-primary-400 text-white px-8 py-3 rounded-xl font-medium transition"
              >
                Get Started
              </Link>
              <Link
                to="/login"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-xl font-medium border border-white/30 transition"
              >
                Login
              </Link>
            </div>
          ) : (
            <Link
              to={user.role === "customer" ? "/customer" : "/labour"}
              className="inline-block bg-primary-500 hover:bg-primary-400 text-white px-8 py-3 rounded-xl font-medium transition"
            >
              Go to Dashboard
            </Link>
          )}
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          How it works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-xl bg-gray-50">
            <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto text-xl font-bold mb-3">
              1
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Choose role</h3>
            <p className="text-gray-600 text-sm">
              Register as Customer or Labour.
            </p>
          </div>
          <div className="text-center p-6 rounded-xl bg-gray-50">
            <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto text-xl font-bold mb-3">
              2
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Browse or offer
            </h3>
            <p className="text-gray-600 text-sm">
              Customers find labours; labours get requests.
            </p>
          </div>
          <div className="text-center p-6 rounded-xl bg-gray-50">
            <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto text-xl font-bold mb-3">
              3
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Book & manage</h3>
            <p className="text-gray-600 text-sm">
              Static bookings for demo only.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
