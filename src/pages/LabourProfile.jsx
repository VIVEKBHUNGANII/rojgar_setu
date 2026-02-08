import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { SKILLS } from "../data/dummyData";

export default function LabourProfile() {
  const { user } = useAuth();
  const [name, setName] = useState(user?.name || "");
  const [skill, setSkill] = useState("Electrician");
  const [experience, setExperience] = useState("5 years");
  const [location, setLocation] = useState("Delhi NCR");
  const [available, setAvailable] = useState(true);
  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="min-h-[calc(100vh-12rem)] bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Edit Profile</h1>
        <div className="bg-white rounded-2xl shadow border border-gray-100 p-6">
          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Primary Skill
              </label>
              <select
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 bg-white"
              >
                {SKILLS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Experience
              </label>
              <input
                type="text"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                placeholder="e.g. 5 years"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="available"
                checked={available}
                onChange={(e) => setAvailable(e.target.checked)}
                className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <label
                htmlFor="available"
                className="text-sm font-medium text-gray-700"
              >
                Available for work
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-2.5 bg-primary-600 hover:bg-primary-500 text-white rounded-lg font-medium transition"
            >
              {saved ? "Saved!" : "Save Profile"}
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-4">
            UI only – no data is persisted. Academic demo.
          </p>
        </div>
      </div>
    </div>
  );
}
