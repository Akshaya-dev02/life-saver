"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-black to-slate-900 flex items-center justify-center">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-[140px] rounded-full animate-pulse"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/20 blur-[140px] rounded-full animate-pulse"></div>

      <div className="absolute top-40 right-60 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full"></div>

      {/* Floating Circles */}

      <div className="absolute w-5 h-5 rounded-full bg-cyan-400 top-24 left-40 animate-bounce"></div>

      <div className="absolute w-3 h-3 rounded-full bg-red-400 bottom-28 right-52 animate-ping"></div>

      <div className="absolute w-4 h-4 rounded-full bg-blue-400 top-56 right-80 animate-bounce"></div>

      {/* Hero */}

      <motion.div

        initial={{ opacity: 0, y: 40 }}

        animate={{ opacity: 1, y: 0 }}

        transition={{ duration: .8 }}

        className="relative z-10 text-center max-w-5xl px-6"

      >

        <motion.h1

          animate={{
            scale: [1, 1.03, 1]
          }}

          transition={{
            repeat: Infinity,
            duration: 4
          }}

          className="text-7xl md:text-8xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-red-500 bg-clip-text text-transparent"

        >
          Guardian AI
        </motion.h1>

        <p className="mt-8 text-2xl text-gray-300 leading-relaxed">
          AI Powered Emergency Response & Personal Safety Platform
        </p>

        <p className="mt-5 text-gray-400 text-lg max-w-3xl mx-auto">
          Protecting lives with Artificial Intelligence, Real-Time GPS
          Tracking, Emergency SOS Alerts, Voice Threat Detection,
          Predictive Analytics and Instant Emergency Contact Support.
        </p>

        {/* Buttons */}

        <div className="flex justify-center gap-6 mt-14">

          <Link
            href="/login"
            className="px-12 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xl font-bold shadow-xl shadow-cyan-500/40 hover:scale-105 duration-300"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="px-12 py-4 rounded-2xl bg-gradient-to-r from-red-500 to-pink-600 text-white text-xl font-bold shadow-xl shadow-red-500/40 hover:scale-105 duration-300"
          >
            Register
          </Link>

        </div>

        {/* Features */}

        <div className="grid md:grid-cols-4 gap-6 mt-24">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="glass p-6 rounded-3xl"
          >
            <div className="text-5xl mb-4">🛡</div>

            <h2 className="text-xl font-bold">
              Smart Protection
            </h2>

            <p className="text-gray-400 mt-3">
              AI continuously monitors your safety.
            </p>

          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="glass p-6 rounded-3xl"
          >
            <div className="text-5xl mb-4">📍</div>

            <h2 className="text-xl font-bold">
              Live Tracking
            </h2>

            <p className="text-gray-400 mt-3">
              Real-time GPS monitoring and location sharing.
            </p>

          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="glass p-6 rounded-3xl"
          >
            <div className="text-5xl mb-4">🚨</div>

            <h2 className="text-xl font-bold">
              Instant SOS
            </h2>

            <p className="text-gray-400 mt-3">
              Notify emergency contacts in one click.
            </p>

          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="glass p-6 rounded-3xl"
          >
            <div className="text-5xl mb-4">🤖</div>

            <h2 className="text-xl font-bold">
              AI Assistant
            </h2>

            <p className="text-gray-400 mt-3">
              Detects danger through voice and behaviour.
            </p>

          </motion.div>

        </div>

      </motion.div>

      {/* Footer */}

      <div className="absolute bottom-5 text-gray-500 text-sm">
        Guardian AI © 2026 | Smart Emergency Response System
      </div>

    </main>
  );
}