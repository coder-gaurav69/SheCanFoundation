import React from "react";

const stats = [
  { icon: "👥", value: "1,247", label: "Active Interns" },
  { icon: "💲", value: "$847,392", label: "Total Raised" },
  { icon: "⏳", value: "3,891", label: "Rewards Unlocked" },
  { icon: "💜", value: "12,847", label: "Lives Impacted" }
];

export default function Stats() {
  return (
    <section className="flex justify-center items-center gap-8 bg-gradient-to-r from-[#f6fafe] to-[#eef0fb] py-6">
      {stats.map((s, idx) => (
        <div key={idx} className="text-center">
          <div className="text-2xl bg-[#eef0fb] rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-1">{s.icon}</div>
          <div className="text-2xl font-extrabold">{s.value}</div>
          <div className="text-sm text-gray-500">{s.label}</div>
        </div>
      ))}
    </section>
  );
}
