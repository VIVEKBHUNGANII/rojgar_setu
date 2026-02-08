import { useState, useMemo } from "react";
import LabourCard from "../components/LabourCard";
import { LABOURS, SKILLS } from "../data/dummyData";

export default function CustomerDashboard() {
  const [search, setSearch] = useState("");
  const [skillFilter, setSkillFilter] = useState("");

  const filteredLabours = useMemo(() => {
    return LABOURS.filter((l) => {
      const matchSearch =
        !search ||
        l.name.toLowerCase().includes(search.toLowerCase()) ||
        l.location.toLowerCase().includes(search.toLowerCase());
      const matchSkill = !skillFilter || l.skill === skillFilter;
      return matchSearch && matchSkill;
    });
  }, [search, skillFilter]);

  return (
    <div className="min-h-[calc(100vh-12rem)] bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Find Services Provider
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by name or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
          <select
            value={skillFilter}
            onChange={(e) => setSkillFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white min-w-[160px]"
          >
            <option value="">All skills</option>
            {SKILLS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredLabours.map((labour) => (
            <LabourCard key={labour.id} labour={labour} />
          ))}
        </div>
        {filteredLabours.length === 0 && (
          <p className="text-gray-500 text-center py-12">
            No labours match your filters.
          </p>
        )}
      </div>
    </div>
  );
}
