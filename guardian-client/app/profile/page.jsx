"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import { motion } from "framer-motion";

export default function Profile() {

  const [user, setUser] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-10">

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold text-white">
              👤 My Profile
            </h1>

            <p className="text-slate-400 mt-2">
              Manage your Guardian AI account information.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-10 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-10"
          >

            <div className="flex flex-col md:flex-row items-center gap-10">

              {/* Avatar */}

              <div className="flex flex-col items-center">

                <div className="w-40 h-40 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-6xl shadow-xl">

                  👤

                </div>

                <button className="mt-5 px-6 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition">

                  Change Photo

                </button>

              </div>

              {/* Details */}

              <div className="flex-1 grid md:grid-cols-2 gap-6">

                <div>
                  <label className="text-slate-400 text-sm">
                    Full Name
                  </label>

                  <input
                    value={user.fullName || ""}
                    readOnly
                    className="mt-2 w-full bg-slate-800 border border-slate-700 rounded-xl p-4 text-white"
                  />
                </div>

                <div>
                  <label className="text-slate-400 text-sm">
                    Email Address
                  </label>

                  <input
                    value={user.email || ""}
                    readOnly
                    className="mt-2 w-full bg-slate-800 border border-slate-700 rounded-xl p-4 text-white"
                  />
                </div>

                <div>
                  <label className="text-slate-400 text-sm">
                    Mobile Number
                  </label>

                  <input
                    value={user.phone || ""}
                    readOnly
                    className="mt-2 w-full bg-slate-800 border border-slate-700 rounded-xl p-4 text-white"
                  />
                </div>

                <div>
                  <label className="text-slate-400 text-sm">
                    Account Status
                  </label>

                  <input
                    value="Guardian AI Protected"
                    readOnly
                    className="mt-2 w-full bg-green-600 rounded-xl p-4 text-white font-semibold"
                  />
                </div>

              </div>

            </div>

          </motion.div>

          {/* Statistics */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .4 }}
            className="grid md:grid-cols-3 gap-6 mt-10"
          >

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10">

              <h3 className="text-slate-300">
                Emergency Contacts
              </h3>

              <h1 className="text-5xl font-bold text-cyan-400 mt-4">
                4
              </h1>

            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10">

              <h3 className="text-slate-300">
                SOS Alerts
              </h3>

              <h1 className="text-5xl font-bold text-red-400 mt-4">
                18
              </h1>

            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10">

              <h3 className="text-slate-300">
                AI Protection
              </h3>

              <h1 className="text-5xl font-bold text-green-400 mt-4">
                Active
              </h1>

            </div>

          </motion.div>

          {/* Guardian Status */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .6 }}
            className="mt-10 bg-gradient-to-r from-cyan-500 to-blue-700 rounded-3xl p-10 shadow-2xl"
          >

            <h2 className="text-3xl font-bold text-white">
              🛡 Guardian AI Protection
            </h2>

            <p className="text-white/90 mt-4 text-lg">

              Your Guardian AI system is currently monitoring:

            </p>

            <div className="grid md:grid-cols-4 gap-5 mt-8">

              <div className="bg-white/20 rounded-xl p-5 text-center">
                📍<br />GPS Tracking
              </div>

              <div className="bg-white/20 rounded-xl p-5 text-center">
                🎤<br />Voice Detection
              </div>

              <div className="bg-white/20 rounded-xl p-5 text-center">
                🚨<br />SOS Monitoring
              </div>

              <div className="bg-white/20 rounded-xl p-5 text-center">
                🤖<br />AI Analysis
              </div>

            </div>
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.3 }}
  className="flex justify-center gap-6 mt-8"
>

  <button
    onClick={() => window.location.href = "/settings"}
    className="px-10 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg shadow-lg hover:scale-105 transition-all duration-300"
  >
    ⚙ Settings
  </button>

  <button
    onClick={() => window.location.href = "/login"}
    className="px-10 py-4 rounded-2xl bg-gradient-to-r from-red-500 to-pink-600 text-white font-bold text-lg shadow-lg hover:scale-105 transition-all duration-300"
  >
    🚪 Logout
  </button>

</motion.div>
          </motion.div>

        </div>

      </div>

    </div>
  );
}