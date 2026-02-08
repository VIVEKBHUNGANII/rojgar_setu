import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { LABOURS } from "../data/dummyData";

export default function BookingPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const labour = LABOURS.find((l) => l.id === id);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [address, setAddress] = useState("");
  const [hours, setHours] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  if (!labour) {
    return (
      <div className="min-h-[calc(100vh-12rem)] flex items-center justify-center">
        <p className="text-gray-500">Services provider not found.</p>
      </div>
    );
  }

  const total = labour.pricePerHour * hours;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => navigate("/customer/bookings"), 1500);
  };

  if (submitted) {
    return (
      <div className="min-h-[calc(100vh-12rem)] flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-md">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
            ✓
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Booking Request Sent
          </h2>
          <p className="text-gray-600 text-sm">
            This is a demo. No real booking was made for services provider.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-12rem)] bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 bg-gray-50">
            <h2 className="text-xl font-bold text-gray-900">{labour.name}</h2>
            <p className="text-primary-600 font-medium">{labour.skill}</p>
            <p className="text-gray-600 text-sm mt-1">
              ★ {labour.rating} ({labour.reviews} reviews) • ₹
              {labour.pricePerHour}/hr
            </p>
          </div>
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Time
              </label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                placeholder="Your address"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Hours
              </label>
              <input
                type="number"
                min={1}
                value={hours}
                onChange={(e) => setHours(Number(e.target.value) || 1)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div className="pt-4 border-t border-gray-100">
              <p className="text-gray-600 text-sm">
                Total (static):{" "}
                <span className="font-bold text-primary-600 text-lg">
                  ₹{total}
                </span>
              </p>
            </div>
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => navigate("/customer")}
                className="flex-1 py-2.5 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-2.5 bg-primary-600 hover:bg-primary-500 text-white rounded-lg font-medium transition"
              >
                Confirm Booking
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
