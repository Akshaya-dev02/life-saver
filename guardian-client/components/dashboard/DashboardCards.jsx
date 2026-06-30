"use client";

export default function DashboardCards() {

  const cards = [
    {
      title: "Emergency Contacts",
      value: 4,
    },
    {
      title: "SOS Triggered",
      value: 12,
    },
    {
      title: "Risk Score",
      value: "74%",
    },
    {
      title: "Safe Status",
      value: "YES",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {cards.map((card, index) => (

        <div
          key={index}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl hover:scale-105 transition-all duration-300"
        >

          <h2 className="text-gray-300 text-lg font-medium mb-5">
            {card.title}
          </h2>

          <p className="text-5xl font-extrabold text-cyan-400 drop-shadow-lg">
            {card.value}
          </p>

        </div>

      ))}

    </div>
  );
}