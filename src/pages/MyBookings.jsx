import { MY_BOOKINGS } from "../data/dummyData";

export default function MyBookings() {
  return (
    <div className="min-h-[calc(100vh-12rem)] bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">My Bookings</h1>
        <div className="space-y-4">
          {MY_BOOKINGS.map((b) => (
            <div
              key={b.id}
              className="bg-white rounded-xl shadow border border-gray-100 p-5 flex flex-wrap items-center justify-between gap-4"
            >
              <div>
                <p className="font-semibold text-gray-900">{b.labourName}</p>
                <p className="text-sm text-gray-500">{b.skill}</p>
                <p className="text-sm text-gray-600 mt-1">
                  {b.date} at {b.time}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-semibold text-primary-600">
                  ₹{b.price}
                </span>
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    b.status === "confirmed"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {b.status}
                </span>
              </div>
            </div>
          ))}
        </div>
        {MY_BOOKINGS.length === 0 && (
          <p className="text-gray-500 text-center py-12">
            No bookings yet. Book a labour from the dashboard.
          </p>
        )}
      </div>
    </div>
  );
}
