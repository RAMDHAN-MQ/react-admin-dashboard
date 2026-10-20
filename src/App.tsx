import { Outlet } from "react-router-dom";
import MainContent from "./components/layouts/MainContent";
import Sidebar from "./components/layouts/Sidebar";
import { useState } from "react";

export default function App() {
  const [isClose, setIsClose] = useState(false);
  function handleClose() {
    setIsClose(!isClose);
  }
  return (
    <div className="flex h-screen">
      <Sidebar isClose={isClose} />
      <MainContent onClose={handleClose}>
        <Outlet />
      </MainContent>
    </div>
  );
}
