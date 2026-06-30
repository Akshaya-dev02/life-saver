"use client";

import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";

import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const monthlyData = [
  { month: "Jan", sos: 2, trips: 10 },
  { month: "Feb", sos: 4, trips: 18 },
  { month: "Mar", sos: 3, trips: 25 },
  { month: "Apr", sos: 6, trips: 28 },
  { month: "May", sos: 4, trips: 35 },
  { month: "Jun", sos: 7, trips: 40 },
];

const threatData = [
  { name: "Voice Threat", value: 40 },
  { name: "Location Risk", value: 25 },
  { name: "SOS Trigger", value: 20 },
  { name: "Safe Zone", value: 15 },
];

const weeklyData = [
  { day: "Mon", score: 70 },
  { day: "Tue", score: 82 },
  { day: "Wed", score: 60 },
  { day: "Thu", score: 88 },
  { day: "Fri", score: 91 },
  { day: "Sat", score: 75 },
  { day: "Sun", score: 95 },
];

const COLORS = [
  "#06b6d4",
  "#3b82f6",
  "#ef4444",
  "#22c55e",
];

export default function Analytics() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-8">

          <h1 className="text-5xl font-bold mb-10 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Guardian AI Analytics
          </h1>

          {/* Statistics */}

          <div className="grid md:grid-cols-4 gap-6 mb-10">

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/10">
              <h3 className="text-gray-300">Total SOS Alerts</h3>
              <p className="text-5xl font-bold text-red-400 mt-3">18</p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/10">
              <h3 className="text-gray-300">AI Threats</h3>
              <p className="text-5xl font-bold text-yellow-400 mt-3">42</p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/10">
              <h3 className="text-gray-300">Safe Trips</h3>
              <p className="text-5xl font-bold text-green-400 mt-3">105</p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/10">
              <h3 className="text-gray-300">Risk Score</h3>
              <p className="text-5xl font-bold text-cyan-400 mt-3">74%</p>
            </div>

          </div>

          {/* Charts */}

          <div className="grid lg:grid-cols-2 gap-8">

            {/* Bar Chart */}

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/10">

              <h2 className="text-2xl font-bold mb-5">
                Monthly SOS Comparison
              </h2>

              <ResponsiveContainer width="100%" height={320}>

                <BarChart data={monthlyData}>

                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />

                  <XAxis dataKey="month" stroke="#ddd" />

                  <YAxis stroke="#ddd" />

                  <Tooltip />

                  <Legend />

                  <Bar
                    dataKey="sos"
                    fill="#ef4444"
                    radius={[8,8,0,0]}
                  />

                  <Bar
                    dataKey="trips"
                    fill="#06b6d4"
                    radius={[8,8,0,0]}
                  />

                </BarChart>

              </ResponsiveContainer>

            </div>

            {/* Pie Chart */}

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/10">

              <h2 className="text-2xl font-bold mb-5">
                Threat Distribution
              </h2>

              <ResponsiveContainer width="100%" height={320}>

                <PieChart>

                  <Pie
                    data={threatData}
                    dataKey="value"
                    outerRadius={120}
                    label
                  >

                    {threatData.map((entry, index) => (

                      <Cell
                        key={index}
                        fill={COLORS[index % COLORS.length]}
                      />

                    ))}

                  </Pie>

                  <Tooltip />

                  <Legend />

                </PieChart>

              </ResponsiveContainer>

            </div>

            {/* Line Chart */}

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/10 lg:col-span-2">

              <h2 className="text-2xl font-bold mb-5">
                Weekly Safety Score
              </h2>

              <ResponsiveContainer width="100%" height={350}>

                <LineChart data={weeklyData}>

                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />

                  <XAxis dataKey="day" stroke="#ddd"/>

                  <YAxis stroke="#ddd"/>

                  <Tooltip />

                  <Legend />

                  <Line
                    type="monotone"
                    dataKey="score"
                    stroke="#06b6d4"
                    strokeWidth={4}
                  />

                </LineChart>

              </ResponsiveContainer>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}