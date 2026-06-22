"use client";

import { useEffect, useMemo, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(target: Date): TimeLeft {
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / 1000 / 60) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

interface Props {
  targetDate: string;
  label?: string;
  theme?: "light" | "dark";
}

export function CountdownTimer({ targetDate, label = "Until launch", theme = "light" }: Props) {
  const target = useMemo(() => new Date(targetDate), [targetDate]);
  const [time, setTime] = useState<TimeLeft>(getTimeLeft(target));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (!mounted) return null;

  const isDark = theme === "dark";
  const labelColor = isDark ? "text-white/50" : "text-[#7a9ea1]";
  const unitLabelColor = isDark ? "text-white/40" : "text-[#7a9ea1]";
  const separatorColor = isDark ? "text-white/30" : "text-[#008e97]";
  const digitBg = isDark ? "bg-white/10 border border-white/15" : "bg-[#0f1f20]";
  const digitColor = isDark ? "text-white" : "text-white";

  const units = [
    { value: time.days, label: "Days" },
    { value: time.hours, label: "Hrs" },
    { value: time.minutes, label: "Min" },
    { value: time.seconds, label: "Sec" },
  ];

  return (
    <div className="flex flex-col items-center gap-3">
      <p className={`text-xs font-semibold tracking-[0.18em] uppercase ${labelColor}`}>{label}</p>
      <div className="flex items-center gap-3">
        {units.map((unit, i) => (
          <div key={unit.label} className="flex items-center gap-3">
            <div className="flex flex-col items-center">
              <div className={`min-w-[3.5rem] h-14 rounded-xl flex items-center justify-center ${digitBg}`}>
                <span className={`text-2xl font-bold font-['Fraunces'] tabular-nums ${digitColor}`}>
                  {String(unit.value).padStart(2, "0")}
                </span>
              </div>
              <span className={`text-[10px] mt-1 tracking-widest uppercase ${unitLabelColor}`}>{unit.label}</span>
            </div>
            {i < units.length - 1 && (
              <span className={`font-bold text-xl -mt-5 select-none ${separatorColor}`}>:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
