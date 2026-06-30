"use client";

import dynamic from "next/dynamic";

const LiveMapClient = dynamic(() => import("./LiveMapClient"), {
  ssr: false,
  loading: () => (
    <div className="bg-white h-[500px] rounded-xl shadow flex items-center justify-center">
      Loading Map...
    </div>
  ),
});

export default function LiveMap() {
  return <LiveMapClient />;
}