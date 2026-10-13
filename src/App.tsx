import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <MainContent />
    </div>
  );
}
