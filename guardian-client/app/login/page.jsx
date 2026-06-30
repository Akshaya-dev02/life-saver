"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import {
  FaShieldAlt,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import { loginUser } from "@/services/authService";
import useAuth from "@/hooks/useAuth";

export default function Login() {
  const router = useRouter();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = await loginUser(formData);

      login(data.user, data.token);

      toast.success("Welcome Back!");

      router.push("/dashboard");
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">

      <div className="login-overlay"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
        className="login-card"
      >

        <motion.div
          animate={{
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
          }}
          className="logo-circle"
        >
          <FaShieldAlt size={55} />
        </motion.div>

        <h1 className="title">
          Guardian AI
        </h1>

        <p className="subtitle">
          AI Powered Emergency Response Platform
        </p>

        <form
          onSubmit={handleSubmit}
          className="login-form"
        >

          <div className="input-box">

            <FaEnvelope className="input-icon"/>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              required
            />

          </div>

          <div className="input-box">

            <FaLock className="input-icon"/>

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />

            <span
              className="eye"
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {
                showPassword
                  ? <FaEyeSlash/>
                  : <FaEye/>
              }
            </span>

          </div>

          <button
            disabled={loading}
            className="login-btn"
          >
            {
              loading
                ? "Signing In..."
                : "Login"
            }
          </button>

        </form>

      </motion.div>

    </div>
  );
}