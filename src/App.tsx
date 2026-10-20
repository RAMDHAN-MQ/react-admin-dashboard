import { Outlet } from "react-router-dom";
import MainContent from "./components/layouts/MainContent";
import Sidebar from "./components/layouts/Sidebar";
import { useEffect, useState } from "react";

export default function App() {
  const [isClose, setIsClose] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const tema = localStorage.getItem("theme");
    console.log(tema);
    return tema ? JSON.parse(tema) : false;
  });

  console.log(isDark);

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
      <MainContent onClose={handleClose} onDarkMode={handleDarkMode}>
        <Outlet />
      </MainContent>
    </div>
  );
}
