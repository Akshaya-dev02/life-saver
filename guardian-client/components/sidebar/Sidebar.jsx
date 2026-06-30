"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  ShieldAlert,
  Users,
  BarChart3,
  Settings,
  Shield,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const menus = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <Home size={20} />,
    },
    {
      title: "SOS",
      href: "/sos",
      icon: <ShieldAlert size={20} />,
    },
    {
      title: "Contacts",
      href: "/contacts",
      icon: <Users size={20} />,
    },
    {
      title: "Analytics",
      href: "/analytics",
      icon: <BarChart3 size={20} />,
    },
    {
      title: "Settings",
      href: "/settings",
      icon: <Settings size={20} />,
    },
  ];

  return (
    <aside className="w-72 min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-r border-cyan-500/20 shadow-2xl flex flex-col">

      {/* Logo */}

      <div className="flex flex-col items-center py-10">

        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/40 animate-pulse">

          <Shield size={40} className="text-white" />

        </div>

        <h1 className="mt-5 text-3xl font-bold text-white tracking-wide">
          Guardian AI
        </h1>

        <p className="text-cyan-300 text-sm mt-1">
          Smart Personal Safety
        </p>

      </div>

      {/* Navigation */}

      <nav className="flex-1 px-5">

        {menus.map((item) => (

          <Link
            key={item.href}
            href={item.href}
            className={`group flex items-center gap-4 px-5 py-4 rounded-2xl mb-3 transition-all duration-300
            ${
              pathname === item.href
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30"
                : "text-slate-300 hover:bg-slate-800 hover:text-cyan-300"
            }`}
          >

            <span className="group-hover:scale-110 transition-transform">
              {item.icon}
            </span>

            <span className="font-medium text-lg">
              {item.title}
            </span>

          </Link>

        ))}

      </nav>

      {/* Footer */}

      <div className="p-6 border-t border-slate-700">

        <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl p-4 text-center">

          <div className="text-green-400 font-bold flex items-center justify-center gap-2">

            🟢 System Protected

          </div>

          <p className="text-slate-400 text-xs mt-2">
            Guardian AI v1.0
          </p>

        </div>

      </div>

    </aside>
  );
}