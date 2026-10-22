import { Outlet } from "react-router-dom";
import MainContent from "./components/layouts/MainContent";
import Sidebar from "./components/layouts/Sidebar";
import { useEffect, useState } from "react";

export default function App() {
  const [isClose, setIsClose] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const tema = localStorage.getItem("theme");
    return tema ? JSON.parse(tema) : false;
  });

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(isDark));
  }, [isDark]);

  function handleClose() {
    setIsClose(!isClose);
  }

  function handleDarkMode() {
    setIsDark(!isDark);
  }

  return (
    <div className={`flex h-screen ${isDark && "dark"}`}>
      <Sidebar isClose={isClose} />
      <MainContent
        onClose={handleClose}
        onDarkMode={handleDarkMode}
        isDark={isDark}
      >
        <Outlet context={{ isDark, setIsDark }} />
      </MainContent>
    </div>
  );
}
