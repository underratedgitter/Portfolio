import { useEffect, useState } from "react";

export function useISTClock() {
  const [time, setTime] = useState(() => formatIST(new Date()));

  useEffect(() => {
    const id = setInterval(() => setTime(formatIST(new Date())), 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}

function formatIST(date: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date);
}

const CAREER_START = new Date("2023-07-01T00:00:00+05:30");

export function useUptime() {
  const [uptime, setUptime] = useState(() => formatUptime(new Date()));

  useEffect(() => {
    const id = setInterval(() => setUptime(formatUptime(new Date())), 1000);
    return () => clearInterval(id);
  }, []);

  return uptime;
}

function formatUptime(now: Date) {
  const diffMs = now.getTime() - CAREER_START.getTime();
  const totalSeconds = Math.floor(diffMs / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${days}d ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}
