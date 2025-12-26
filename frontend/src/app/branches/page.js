"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useTheme } from "next-themes";

/* ---------- BRANCH DATA ---------- */
const branches = [
  {
    id: "main",
    name: "Main Branch – AL Nakheel, Ras Al Khaimah",
    address:
      "Al Uraibi Building - opp. RAK Bank - Al Nakheel - Ras Al Khaimah, UAE",
    mobile: "+971523845222",
    landline: "072216444",
    whatsapp: "971523845222",
    icon: "/icon.jpg",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Al+Manar+Typing+%26+Documents+Clearing+RAK",
  },
  {
    id: "branch1",
    name: "Branch 1 – Digdaga, Ras Al Khaimah",
    address: "Airport Rd - Al Digdaga - Ras Al Khaimah, UAE",
    mobile: "+971525316907",
    landline: "072211444",
    whatsapp: "971525316907",
    icon: "/icon.jpg",
    mapLink:
    "https://www.google.com/maps/search/?api=1&query=AL+MANAR+TYPING+%26+DOCUMENTS+CLEARING+BR+1"



  },
];

/* ---------- WORKING HOURS ---------- */
const workingHours = [
  {
    days: "Sunday – Thursday",
    shifts: [
      { from: "08:00 AM", to: "02:00 PM" },
      { from: "05:00 PM", to: "10:00 PM" },
    ],
  },
  {
    days: "Friday",
    shifts: [
      { from: "08:00 AM", to: "12:00 PM" },
      { from: "05:00 PM", to: "10:00 PM" },
    ],
  },
  { days: "Saturday", shifts: [] },
];

/* ---------- BRANCH BUTTONS ---------- */
const BranchButtons = ({ activeBranch, setActiveBranch }) => {
  const { theme } = useTheme();

  const gradient =
    theme === "dark"
      ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700"
      : "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600";

  return (
    <div className="flex justify-center gap-4 flex-wrap mb-10 sticky top-4 z-20">
      {branches.map((b) => (
        <button
          key={b.id}
          onClick={() => setActiveBranch(b.id)}
          className={`px-5 py-2 rounded-full text-white font-medium transition-all ${gradient}
          ${
            activeBranch === b.id
              ? "ring-4 ring-yellow-400 scale-105"
              : "hover:scale-105"
          }`}
        >
          {b.name}
        </button>
      ))}
    </div>
  );
};

/* ---------- BRANCH CARD ---------- */
const BranchCard = ({ branch, activeBranch }) => {
  const { theme } = useTheme();

  const cardGradient =
    theme === "dark"
      ? "bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-700"
      : "bg-gradient-to-tr from-blue-400 via-blue-500 to-blue-600";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      className={`relative rounded-2xl p-6 shadow-xl text-white ${cardGradient}
      ${activeBranch === branch.id ? "ring-4 ring-yellow-400" : ""}`}
    >
      {/* Background icon */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${branch.icon})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 space-y-4">
        <h2 className="text-xl font-semibold text-yellow-400">
          {branch.name}
        </h2>

        <p className="flex items-center gap-2">
          <MapPin size={18} /> {branch.address}
        </p>

        <p className="flex items-center gap-2">
  <Phone size={18} />

  <a
    href={`tel:${branch.mobile}`}
    className="text-white hover:text-yellow-600"
  >
    {branch.mobile}
  </a>

  <span>| ☎️</span>

  <a
    href={`tel:${branch.landline}`}
    className="text-white hover:text-yellow-600"
  >
    {branch.landline}
  </a>
</p>


        <a
          href={`https://wa.me/${branch.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <FaWhatsapp /> {branch.whatsapp}
        </a>

        {/* LOCATION BUTTON (DIRECT OPEN) */}
        <a
          href={branch.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full
          bg-yellow-400 text-black font-medium hover:bg-yellow-300 transition w-fit"
        >
          <MapPin size={18} />
          Open in Maps
        </a>

        {/* WORKING HOURS */}
        <div>
          <h3 className="font-medium flex items-center gap-2">
            <Clock size={18} className="text-yellow-400" /> Working Hours
          </h3>

          {workingHours.map((w, i) => (
            <p key={i} className="text-sm">
              {w.days}:{" "}
              {w.shifts.length ? (
                w.shifts.map((s) => `${s.from} – ${s.to}`).join(" & ")
              ) : (
                <span className="text-red-400 font-semibold">Closed</span>
              )}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

/* ---------- MAIN PAGE ---------- */
export default function BranchPage() {
  const [activeBranch, setActiveBranch] = useState(branches[0].id);

  const branchCards = useMemo(
    () =>
      branches.map((b) => (
        <BranchCard
          key={b.id}
          branch={b}
          activeBranch={activeBranch}
        />
      )),
    [activeBranch]
  );

  return (
    <div className="min-h-screen p-6 md:p-12 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-center mb-10 text-yellow-500">
        Our Branches
      </h1>

      <BranchButtons
        activeBranch={activeBranch}
        setActiveBranch={setActiveBranch}
      />

      <div className="grid md:grid-cols-2 gap-8">{branchCards}</div>
    </div>
  );
}
