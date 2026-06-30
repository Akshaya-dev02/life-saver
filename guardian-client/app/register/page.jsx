"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { registerUser } from "@/services/authService";

export default function Register() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      return toast.error("Please fill all fields");
    }

    if (formData.password.length < 6) {
      return toast.error("Password must be at least 6 characters");
    }

    if (formData.password !== formData.confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      setLoading(true);

      await registerUser({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      });

      toast.success("Registration Successful");

      setTimeout(() => {
        router.push("/login");
      }, 1200);

    } catch (err) {
      toast.error(
        err.response?.data?.message ||
        "Registration Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-black flex items-center justify-center p-6">

      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-cyan-500/20 blur-[180px] rounded-full -top-40 -left-32 animate-pulse"></div>

      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[180px] rounded-full bottom-0 right-0 animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, scale: .95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: .6 }}
        className="relative z-10 w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-xl bg-white/10 grid md:grid-cols-2"
      >

        {/* Left Side */}

        <div className="hidden md:flex flex-col justify-center p-12 bg-gradient-to-br from-cyan-600 via-blue-700 to-indigo-900 text-white">

          <h1 className="text-5xl font-bold">
            Guardian AI
          </h1>

          <p className="mt-6 text-lg leading-8 text-blue-100">
            Smart Personal Safety Platform powered by Artificial Intelligence.
          </p>

          <div className="mt-10 space-y-4">

            <div>✔ Live GPS Tracking</div>

            <div>✔ AI Emergency Detection</div>

            <div>✔ Instant SOS Alerts</div>

            <div>✔ Emergency Contacts</div>

            <div>✔ Analytics Dashboard</div>

          </div>

        </div>

        {/* Right Side */}

        <div className="bg-white/95 backdrop-blur-xl p-10">

          <h2 className="text-4xl font-bold text-center text-gray-800">
            Create Account
          </h2>

          <p className="text-center text-gray-500 mt-2 mb-8">
            Join Guardian AI
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-cyan-500 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-cyan-500 outline-none"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-cyan-500 outline-none"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-cyan-500 outline-none"
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-cyan-500 outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-3 font-semibold hover:scale-105 transition-all duration-300"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>

          </form>

          <div className="text-center mt-8">

            <span className="text-gray-600">
              Already have an account?
            </span>

            <button
              onClick={() => router.push("/login")}
              className="ml-2 font-semibold text-cyan-600 hover:text-cyan-800"
            >
              Login
            </button>

          </div>

        </div>

      </motion.div>

    </div>
  );
}