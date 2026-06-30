"use client";

import { motion } from "framer-motion";

import SOSButton from "@/components/sos/SOSButton";
import LiveMap from "@/components/dashboard/LiveMap";
import VoiceIndicator from "@/components/sos/VoiceIndicator";

export default function SOSPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white p-8">

      {/* Header */}

      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
      >

        <h1 className="text-5xl font-bold bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
          🚨 Emergency SOS Center
        </h1>

        <p className="text-slate-400 mt-3 text-lg">
          Instantly notify emergency contacts, monitor live location,
          activate voice detection and stay protected with Guardian AI.
        </p>

      </motion.div>

      {/* TOP SECTION */}

      <div className="grid lg:grid-cols-2 gap-8 mt-10">

        {/* SOS */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: .2 }}
          className="rounded-3xl bg-white/10 backdrop-blur-xl border border-red-500/20 p-8 shadow-2xl"
        >

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-3xl font-bold">
              🚨 Emergency Trigger
            </h2>

            <span className="px-4 py-2 rounded-full bg-red-500/20 text-red-300">
              READY
            </span>

          </div>

          <SOSButton />

        </motion.div>

        {/* Voice */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: .3 }}
          className="rounded-3xl bg-white/10 backdrop-blur-xl border border-cyan-500/20 p-8 shadow-2xl"
        >

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-3xl font-bold">
              🎤 Voice Detection
            </h2>

            <span className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300">
              LISTENING
            </span>

          </div>

          <VoiceIndicator />

        </motion.div>

      </div>

      {/* MAP */}

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .4 }}
        className="rounded-3xl bg-white/10 backdrop-blur-xl border border-blue-500/20 p-8 shadow-2xl mt-10"
      >

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-3xl font-bold">
            📍 Live GPS Tracking
          </h2>

          <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full">
            LIVE
          </span>

        </div>

        <LiveMap />

      </motion.div>

      {/* Bottom Cards */}

      <div className="grid md:grid-cols-3 gap-8 mt-10">

        {/* Contacts */}

        <motion.div
          whileHover={{ y: -8 }}
          className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-6 shadow-xl"
        >

          <h3 className="text-2xl font-bold mb-5">
            👨‍👩‍👧 Emergency Contacts
          </h3>

          <div className="space-y-4">

            <div className="bg-white/5 rounded-xl p-4">
              👤 Dad
              <br />
              <span className="text-slate-400">
                +91 8932540001
              </span>
            </div>

            <div className="bg-white/5 rounded-xl p-4">
              👤 Mom
              <br />
              <span className="text-slate-400">
                +91 6328649256
              </span>
            </div>

            <div className="bg-white/5 rounded-xl p-4">
              👤 Friend
              <br />
              <span className="text-slate-400">
                +91 9876543210
              </span>
            </div>
  

          </div>

        </motion.div>

        {/* Quick Actions */}

        <motion.div
          whileHover={{ y: -8 }}
          className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-6 shadow-xl"
        >

          <h3 className="text-2xl font-bold mb-5">
            ⚡ Quick Actions
          </h3>

          <div className="space-y-4">

            <button className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold transition">
              🚔 Call Police
            </button>

            <button className="w-full py-4 rounded-xl bg-green-600 hover:bg-green-700 font-semibold transition">
              🚑 Call Ambulance
            </button>

            <button className="w-full py-4 rounded-xl bg-yellow-500 hover:bg-yellow-600 font-semibold transition">
              📤 Share Live Location
            </button>

          </div>

        </motion.div>

        {/* AI Status */}

        <motion.div
          whileHover={{ y: -8 }}
          className="rounded-3xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-xl border border-cyan-500/20 p-6 shadow-xl"
        >

          <h3 className="text-2xl font-bold mb-5">
            🤖 Guardian AI
          </h3>

          <div className="flex items-center gap-3">

            <span className="w-5 h-5 rounded-full bg-green-500 animate-pulse"></span>

            <span className="font-bold text-xl">
              System Active
            </span>

          </div>

          <div className="mt-6 space-y-3">

            <p>✅ GPS Tracking Enabled</p>

            <p>✅ Voice Detection Active</p>

            <p>✅ SOS Ready</p>

            <p>✅ AI Monitoring Running</p>

          </div>

        </motion.div>

      </div>

    </div>
  );
}