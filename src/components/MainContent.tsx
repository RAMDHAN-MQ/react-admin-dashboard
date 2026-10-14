import {
  Bell,
  ChevronDown,
  ChevronRight,
  Moon,
  PanelLeftClose,
  User,
} from "lucide-react";
import IconButton from "./IconButton";

export default function MainContent() {
  return (
    <div className="main-content bg-tema-4 flex-1">
      <div className="nav border-b border-b-tema-2 flex items-center justify-between h-16 p-5">
        <div className="nav-kiri flex gap-2 items-center font-semibold text-sm">
          <IconButton
            icon={<PanelLeftClose size={20} />}
            keterangan="text-primary"
            onClick={() => {}}
          />
          <a href="" className="text-gray-400">
            Dashboard
          </a>
          <ChevronRight size={16} className={"text-gray-400"} />
          <a href="" className="text-primary">
            Penjualan
          </a>
        </div>
        <div className="nav-kanan flex gap-1 items-center text-white ">
          <IconButton
            icon={<Moon size={20} />}
            keterangan=""
            onClick={() => {}}
          />
          <IconButton
            icon={<Bell size={20} />}
            keterangan=""
            onClick={() => {}}
          />
          <button className="profile flex items-center gap-2 cursor-pointer rounded-xl py-2 px-3 bg-tema-3 text-sm">
            <User size={20} />
            <span>Ramdhan</span>
            <span className="text-xs">
              <ChevronDown size={16} strokeWidth={2} />
            </span>
          </button>
        </div>
      </div>

      <div className="content p-5">
        <div className="welcome-banner rounded-xl p-5 text-white bg-linear-to-r from-indigo-500 to-blue-500">
          <h1 className="text-2xl font-semibold">Selamat Datang, Admin</h1>
          <small>
            Sudah terbeli <span className="font-bold">10 Barang</span> hari ini!
          </small>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="bg-tema-3 p-5 h-64 col-span-2 rounded-xl">card</div>
          <div className="bg-tema-3 p-5 h-64 rounded-xl">card</div>
          <div className="bg-tema-3 p-5 h-64 rounded-xl">card</div>
          <div className="bg-tema-3 p-5 h-64 rounded-xl">card</div>
          <div className="bg-tema-3 p-5 h-64 rounded-xl">card</div>
        </div>
      </div>
    </div>
  );
}
