import React, { useEffect, useState } from "react";

export default function Timer({
  days = 0,
  hours = 0,
  minutes = 0,
  seconds = 0,
}) {
  const [timeLeft, setTimeLeft] = useState(
    days * 86400 + hours * 3600 + minutes * 60 + seconds
  );

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (totalSeconds) => {
    const d = Math.floor(totalSeconds / 86400);
    const h = Math.floor((totalSeconds % 86400) / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    return {
      d: String(d).padStart(2, "0"),
      h: String(h).padStart(2, "0"),
      m: String(m).padStart(2, "0"),
      s: String(s).padStart(2, "0"),
    };
  };

  const { d, h, m, s } = formatTime(timeLeft);

  return (
    <div className="flex items-center gap-2 text-center text-lg font-medium">
      <div>
        <span className="text-sm ">Days</span>
        <p className="text-2xl">{d}</p>
      </div>
      <span className="text-3xl text-[#DB4444] self-end">:</span>
      <div>
        <span className="text-sm ">Hours</span>
        <p className="text-2xl">{h}</p>
      </div>
      <span className="text-3xl text-[#DB4444] self-end">:</span>

      <div>
        <span className="text-sm ">Minutes</span>
        <p className="text-2xl">{m}</p>
      </div>
      <span className="text-3xl text-[#DB4444] self-end">:</span>

      <div>
        <span className="text-sm ">Seconds</span>
        <p className="text-2xl">{s}</p>
      </div>
    </div>
  );
}
