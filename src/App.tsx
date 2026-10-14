import { Outlet } from "react-router-dom";
import MainContent from "./components/layouts/MainContent";
import Sidebar from "./components/layouts/Sidebar";

export default function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <MainContent>
        <Outlet />
      </MainContent>
    </div>
  );
}
