"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";

import DashboardCards from "@/components/dashboard/DashboardCards";
import SOSButton from "@/components/sos/SOSButton";
import LiveMap from "@/components/dashboard/LiveMap";
import LiveTracker from "@/components/dashboard/LiveTracker";
import Statistics from "@/components/dashboard/Statistics";
import VoiceIndicator from "@/components/sos/VoiceIndicator";

export default function Dashboard() {

  useEffect(() => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }
  }, []);


  return (
    <div className="min-h-screen flex bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white overflow-hidden">

      {/* Background Effects */}

      <div className="fixed inset-0 overflow-hidden pointer-events-none">

        <div className="absolute w-[700px] h-[700px] bg-cyan-500/20 blur-[180px] rounded-full -top-48 -left-48 animate-pulse"></div>

        <div className="absolute w-[600px] h-[600px] bg-purple-600/20 blur-[180px] rounded-full bottom-0 right-0 animate-pulse"></div>

      </div>

      {/* Sidebar */}

      <Sidebar />

      {/* Content */}

      <div className="flex-1 flex flex-col relative z-10">

        <Navbar />

        <main className="flex-1 overflow-y-auto p-8">

          {/* Welcome */}

          <motion.div
            initial={{opacity:0,y:-30}}
            animate={{opacity:1,y:0}}
            transition={{duration:.6}}
            className="mb-8"
          >

            <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Guardian AI Dashboard
            </h1>

            <p className="text-slate-300 mt-3 text-lg">
              Real-time personal safety monitoring powered by Artificial Intelligence.
            </p>

          </motion.div>

          {/* Dashboard Cards */}

          <motion.div
            initial={{opacity:0,y:20}}
            animate={{opacity:1,y:0}}
            transition={{delay:.2}}
            className="glass rounded-3xl p-6 mb-8"
          >

            <DashboardCards />

          </motion.div>

          {/* SOS + Statistics */}

          <div className="grid lg:grid-cols-2 gap-8">

            <motion.div
              initial={{opacity:0,x:-40}}
              animate={{opacity:1,x:0}}
              transition={{delay:.3}}
              className="glass rounded-3xl p-6"
            >

              <SOSButton />

            </motion.div>

            <motion.div
              initial={{opacity:0,x:40}}
              animate={{opacity:1,x:0}}
              transition={{delay:.4}}
              className="glass rounded-3xl p-6"
            >

              <Statistics />

            </motion.div>

          </div>

          {/* Map */}

          <motion.div
            initial={{opacity:0,y:40}}
            animate={{opacity:1,y:0}}
            transition={{delay:.5}}
            className="glass rounded-3xl p-6 mt-8"
          >

            <div className="flex justify-between items-center mb-5">

              <h2 className="text-2xl font-semibold">
                📍 Live Location
              </h2>

              <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-300 text-sm">
                ● LIVE
              </span>

            </div>

            <LiveMap />

          </motion.div>

          {/* Tracker */}

          <motion.div
            initial={{opacity:0,y:40}}
            animate={{opacity:1,y:0}}
            transition={{delay:.6}}
            className="glass rounded-3xl p-6 mt-8"
          >

            <div className="flex justify-between items-center mb-5">

              <h2 className="text-2xl font-semibold">
                🚶 Live Movement Tracker
              </h2>

            </div>

            <LiveTracker />

          </motion.div>

          {/* Voice */}

          <motion.div
            initial={{opacity:0,y:40}}
            animate={{opacity:1,y:0}}
            transition={{delay:.7}}
            className="glass rounded-3xl p-6 mt-8 mb-10"
          >

            <div className="flex justify-between items-center mb-5">

              <h2 className="text-2xl font-semibold">
                🎤 AI Voice Detection
              </h2>

              <span className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300">
                ACTIVE
              </span>

            </div>

            <VoiceIndicator />

          </motion.div>

        </main>

      </div>

    </div>
  );

}