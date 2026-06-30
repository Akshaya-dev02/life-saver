"use client";

import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="bg-white h-16 shadow flex justify-between items-center px-8">

      {/* Logo */}
      <h1 className="text-2xl font-bold text-blue-600">
        Guardian AI
      </h1>

      {/* Right Side */}
      <div className="flex items-center gap-6">

        {/* Notification */}
        <button className="text-2xl hover:scale-110 transition">
          🔔
        </button>

        {/* Profile */}
        <button
          onClick={() => router.push("/profile")}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition"
        >
          <span className="text-xl">👤</span>
          <span className="font-semibold">Profile</span>
        </button>

      </div>

    </div>
  );
}