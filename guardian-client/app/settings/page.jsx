"use client";

import { useState, useEffect } from "react";
import toast from "react-hot-toast";

import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";

export default function Settings() {
  const [voice, setVoice] = useState(true);
  const [notification, setNotification] = useState(true);

  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      setProfile({
        fullName: user.fullName || "",
        email: user.email || "",
        phone: user.phone || "",
      });
    }
  }, []);

  const saveProfile = () => {
    localStorage.setItem("user", JSON.stringify(profile));
    toast.success("Profile Updated Successfully");
  };

  const saveSettings = () => {
    toast.success("Settings Saved Successfully");
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-8 max-w-6xl mx-auto">

          {/* Heading */}

          <h1 className="text-5xl font-extrabold mb-10 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            ⚙ Guardian Settings
          </h1>

          {/* Profile Card */}

          <div className="glass rounded-3xl p-8 border border-cyan-500/20 shadow-2xl mb-10">

            <h2 className="text-3xl font-bold text-cyan-300 mb-8">
              👤 Profile Information
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="block mb-2 text-gray-300">
                  Full Name
                </label>

                <input
                  type="text"
                  value={profile.fullName}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      fullName: e.target.value,
                    })
                  }
                  className="w-full rounded-xl px-4 py-3 bg-slate-900/60 border border-cyan-500/30 text-white focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-300">
                  Email Address
                </label>

                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      email: e.target.value,
                    })
                  }
                  className="w-full rounded-xl px-4 py-3 bg-slate-900/60 border border-cyan-500/30 text-white focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block mb-2 text-gray-300">
                  Phone Number
                </label>

                <input
                  type="text"
                  value={profile.phone}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      phone: e.target.value,
                    })
                  }
                  className="w-full rounded-xl px-4 py-3 bg-slate-900/60 border border-cyan-500/30 text-white focus:ring-2 focus:ring-cyan-400"
                />
              </div>

            </div>

            <button
              onClick={saveProfile}
              className="mt-8 w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-lg font-bold hover:scale-[1.02] duration-300 shadow-xl shadow-cyan-500/30"
            >
              Update Profile
            </button>

          </div>

          {/* App Settings */}

          <div className="glass rounded-3xl p-8 border border-cyan-500/20 shadow-2xl">

            <h2 className="text-3xl font-bold text-cyan-300 mb-8">
              🛡 Guardian Preferences
            </h2>

            {/* Voice */}

            <div className="flex justify-between items-center py-5 border-b border-white/10">

              <div>

                <h3 className="text-xl font-semibold">
                  Voice Detection
                </h3>

                <p className="text-gray-400 text-sm">
                  Enable Guardian AI to continuously monitor voice commands.
                </p>

              </div>

              <label className="relative inline-flex items-center cursor-pointer">

                <input
                  type="checkbox"
                  checked={voice}
                  onChange={() => setVoice(!voice)}
                  className="sr-only peer"
                />

                <div className="w-14 h-7 bg-gray-600 rounded-full peer peer-checked:bg-cyan-500 transition-all"></div>

                <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-all peer-checked:translate-x-7"></div>

              </label>

            </div>

            {/* Notification */}

            <div className="flex justify-between items-center py-5">

              <div>

                <h3 className="text-xl font-semibold">
                  Push Notifications
                </h3>

                <p className="text-gray-400 text-sm">
                  Receive instant SOS alerts and Guardian AI notifications.
                </p>

              </div>

              <label className="relative inline-flex items-center cursor-pointer">

                <input
                  type="checkbox"
                  checked={notification}
                  onChange={() =>
                    setNotification(!notification)
                  }
                  className="sr-only peer"
                />

                <div className="w-14 h-7 bg-gray-600 rounded-full peer peer-checked:bg-cyan-500 transition-all"></div>

                <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-all peer-checked:translate-x-7"></div>

              </label>

            </div>

            <button
              onClick={saveSettings}
              className="mt-8 w-full py-4 rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-lg font-bold hover:scale-[1.02] duration-300 shadow-xl shadow-red-500/30"
            >
              Save Settings
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}