"use client";

import { useState } from "react";
import Navbar from "@/components/ui/Navbar";
import WeeklyContentSection, { WeekData } from "@/components/sections/WeeklyContentSection";
import WeekSelector from "@/components/ui/WeekSelector";

import week1Data from "@/data/content/week1.json";
import week2Data from "@/data/content/week2.json";
import week3Data from "@/data/content/week3.json";

const weekDataMap: Record<string, WeekData> = {
  "week-1": week1Data as WeekData,
  "week-2": week2Data as WeekData,
  "week-3": week3Data as WeekData,
};

export default function WeeklyContentPage() {
  const [selectedWeekId, setSelectedWeekId] = useState("week-1");
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);

  const currentWeekData = weekDataMap[selectedWeekId];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[var(--color-bng-red)] selection:text-white">
      <Navbar />
      <div className="pt-20">
        <WeeklyContentSection
          weekData={currentWeekData}
          onChangeWeek={() => setIsSelectorOpen(true)}
        />
      </div>

      <WeekSelector
        isOpen={isSelectorOpen}
        onClose={() => setIsSelectorOpen(false)}
        onSelect={(weekId) => setSelectedWeekId(weekId)}
        currentWeekId={selectedWeekId}
      />
    </main>
  );
}
