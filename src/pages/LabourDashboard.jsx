import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { INITIAL_BOOKING_REQUESTS } from "../data/dummyData";

const STATUS_TABS = [
  { key: "all", label: "All" },
  { key: "pending", label: "Pending" },
  { key: "confirmed", label: "Accepted" },
  { key: "declined", label: "Declined" },
  { key: "completed", label: "Completed" },
];

function StatusBadge({ status }) {
  const styles = {
    pending: "bg-amber-100 text-amber-800 border-amber-200",
    confirmed: "bg-blue-100 text-blue-800 border-blue-200",
    declined: "bg-red-100 text-red-800 border-red-200",
    completed: "bg-green-100 text-green-800 border-green-200",
  };
  const labels = {
    pending: "Pending",
    confirmed: "Accepted",
    declined: "Declined",
    completed: "Completed",
  };
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${
        styles[status] || "bg-gray-100 text-gray-800"
      }`}
    >
      {labels[status] || status}
    </span>
  );
}

export default function LabourDashboard() {
  const { user } = useAuth();
  const [requests, setRequests] = useState(() => [...INITIAL_BOOKING_REQUESTS]);
  const [activeTab, setActiveTab] = useState("all");
  const [actionFeedback, setActionFeedback] = useState(null);

  const updateStatus = (id, newStatus) => {
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: newStatus } : r))
    );
    setActionFeedback({ id, status: newStatus });
    setTimeout(() => setActionFeedback(null), 2000);
  };

  const pendingCount = requests.filter((r) => r.status === "pending").length;
  const acceptedCount = requests.filter((r) => r.status === "confirmed").length;
  const completedCount = requests.filter(
    (r) => r.status === "completed"
  ).length;
  const declinedCount = requests.filter((r) => r.status === "declined").length;
  const totalEarnings = requests
    .filter((r) => r.status === "completed")
    .reduce((sum, r) => sum + r.amount, 0);

  const filteredRequests =
    activeTab === "all"
      ? requests
      : requests.filter((r) => r.status === activeTab);

  return (
    <div className="min-h-[calc(100vh-12rem)] bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Labour Dashboard</h1>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              Available
            </span>
            <Link
              to="/labour/profile"
              className="text-primary-600 hover:underline text-sm font-medium"
            >
              Edit profile
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="bg-white rounded-xl shadow border border-gray-100 p-4">
            <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">
              Pending
            </p>
            <p className="text-xl font-bold text-amber-600">{pendingCount}</p>
          </div>
          <div className="bg-white rounded-xl shadow border border-gray-100 p-4">
            <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">
              Accepted
            </p>
            <p className="text-xl font-bold text-blue-600">{acceptedCount}</p>
          </div>
          <div className="bg-white rounded-xl shadow border border-gray-100 p-4">
            <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">
              Completed
            </p>
            <p className="text-xl font-bold text-gray-900">{completedCount}</p>
          </div>
          <div className="bg-white rounded-xl shadow border border-gray-100 p-4">
            <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">
              Earnings
            </p>
            <p className="text-xl font-bold text-primary-600">
              ₹{totalEarnings}
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-1 mb-4">
          {STATUS_TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${
                activeTab === tab.key
                  ? "bg-primary-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {actionFeedback && (
          <div className="mb-4 p-3 rounded-lg bg-green-50 text-green-800 text-sm font-medium">
            Request{" "}
            {actionFeedback.status === "declined" ? "declined" : "accepted"}.
          </div>
        )}

        {/* Booking requests list */}
        <div className="bg-white rounded-xl shadow border border-gray-100 overflow-hidden">
          <h2 className="text-lg font-semibold text-gray-900 p-4 border-b border-gray-100">
            Booking Requests
          </h2>
          <div className="divide-y divide-gray-100">
            {filteredRequests.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                No {activeTab === "all" ? "" : activeTab + " "}requests.
              </div>
            ) : (
              filteredRequests.map((req) => (
                <div
                  key={req.id}
                  className="p-4 md:p-5 hover:bg-gray-50/50 transition"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <p className="font-semibold text-gray-900">
                          {req.customerName}
                        </p>
                        <StatusBadge status={req.status} />
                      </div>
                      <p className="text-sm text-gray-500">
                        {req.skill} • {req.date} at {req.time} • {req.hours} hr
                      </p>
                      <p className="text-sm text-gray-600 mt-1 flex items-center gap-1">
                        <span className="text-gray-400">📍</span> {req.address}
                      </p>
                      {req.note && (
                        <p className="text-sm text-gray-500 mt-1 italic">
                          “{req.note}”
                        </p>
                      )}
                      {req.customerPhone && (
                        <p className="text-sm text-gray-600 mt-1">
                          📞 {req.customerPhone}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <span className="font-bold text-primary-600 text-lg">
                        ₹{req.amount}
                      </span>
                      {req.status === "pending" && (
                        <div className="flex gap-2">
                          <button
                            onClick={() => updateStatus(req.id, "confirmed")}
                            className="px-4 py-2 rounded-lg text-sm font-medium bg-green-600 text-white hover:bg-green-500 transition"
                          >
                            Accept
                          </button>
                          <button
                            onClick={() => updateStatus(req.id, "declined")}
                            className="px-4 py-2 rounded-lg text-sm font-medium bg-red-100 text-red-700 hover:bg-red-200 transition"
                          >
                            Decline
                          </button>
                        </div>
                      )}
                      {req.status === "confirmed" && (
                        <button
                          onClick={() => updateStatus(req.id, "completed")}
                          className="px-4 py-2 rounded-lg text-sm font-medium bg-primary-600 text-white hover:bg-primary-500 transition"
                        >
                          Mark completed
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
