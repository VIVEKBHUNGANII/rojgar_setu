import { Link } from "react-router-dom";

export default function LabourCard({ labour }) {
  const { id, name, skill, rating, reviews, location, pricePerHour } = labour;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden border border-gray-100">
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 truncate">{name}</h3>
            <p className="text-primary-600 font-medium text-sm mt-0.5">
              {skill}
            </p>
          </div>
          <div className="flex items-center gap-1 bg-amber-50 text-amber-700 px-2 py-1 rounded-lg text-sm font-medium shrink-0">
            <span>★</span>
            <span>{rating}</span>
            <span className="text-gray-500 font-normal">({reviews})</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm mt-2 flex items-center gap-1">
          <span className="text-gray-400">📍</span> {location}
        </p>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <span className="text-lg font-bold text-primary-600">
            ₹{pricePerHour}
            <span className="text-sm font-normal text-gray-500">/hr</span>
          </span>
          <Link
            to={`/customer/book/${id}`}
            className="bg-primary-600 hover:bg-primary-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            Book Services
          </Link>
        </div>
      </div>
    </div>
  );
}
