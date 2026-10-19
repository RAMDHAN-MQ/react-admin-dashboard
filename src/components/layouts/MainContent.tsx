import {
  Bell,
  ChevronDown,
  LogOut,
  Moon,
  PanelLeftClose,
  Settings,
  User,
} from "lucide-react";
import IconButton from "../ui/IconButton";
import Breadcrumb from "../ui/Breadcrumb";
import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import NotificationItem from "../ui/NotificationItem";

type Props = {
  children: ReactNode;
};

export default function MainContent({ children }: Props) {
  const [isDrop, setIsDrop] = useState({
    profile: false,
    notifikasi: false,
  });

  return (
    <div className="main-content bg-tema-4 flex-1 overflow-y-auto">
      <div className="nav border-b border-b-tema-3 flex items-center justify-between h-16 p-5">
        <div className="nav-kiri flex gap-2 items-center font-semibold text-sm">
          <IconButton
            icon={<PanelLeftClose size={20} />}
            variant="text-primary"
            onClick={() => {}}
          />
          <Breadcrumb />
        </div>
        <div className="nav-kanan flex gap-1 items-center text-white">
          <IconButton icon={<Moon size={20} />} variant="" onClick={() => {}} />
          <div className="relative">
            <IconButton
              icon={<Bell size={20} />}
              variant=""
              onClick={() =>
                setIsDrop((e) => ({
                  profile: false,
                  notifikasi: !e.notifikasi,
                }))
              }
            />
            {isDrop.notifikasi && (
              <div className="flex flex-col my-2 rounded absolute bg-tema-3-shadow w-80 right-0 top-full shadow max-h-80">
                <div className="px-5 py-3 border-b border-b-tema-2">
                  Notifikasi
                </div>
                <ul className="overflow-y-scroll">
                  <NotificationItem
                    judul="judul x"
                    waktu="30 detik yang lalu"
                  />
                  <NotificationItem
                    judul="judul x"
                    waktu="30 menit yang lalu"
                  />
                  <NotificationItem
                    judul="judul x"
                    waktu="5 jam yang lalu"
                  />
                  <NotificationItem
                    judul="judul x"
                    waktu="5 jam yang lalu"
                  />
                  <NotificationItem
                    judul="judul x"
                    waktu="5 jam yang lalu"
                  />
                </ul>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              className="flex items-center gap-2 cursor-pointer rounded py-2 px-3 bg-tema-3 text-sm hover:bg-tema-3-shadow"
              onClick={() =>
                setIsDrop((e) => ({
                  profile: !e.profile,
                  notifikasi: false,
                }))
              }
            >
              <span className="inline-flex items-center justify-center shrink-0 select-none rounded-full align-middle bg-elevated size-7 text-sm">
                <img
                  src="https://picsum.photos/200"
                  className="h-full w-full rounded-[inherit] object-cover"
                />
              </span>
              <span className="font-semibold">Ramdhan</span>
              <ChevronDown size={16} strokeWidth={2} />
            </button>
            {isDrop.profile && (
              <div className="flex flex-col my-2 rounded absolute bg-tema-3-shadow w-44 right-0 top-full shadow">
                <Link
                  to=""
                  className="flex gap-2 items-center px-3 py-2 hover:bg-tema-3"
                >
                  <User size={16} />
                  Profile
                </Link>
                <Link
                  to=""
                  className="flex gap-2 items-center px-3 py-2 hover:bg-tema-3"
                >
                  <Settings size={16} />
                  Setting
                </Link>
                <Link
                  to=""
                  className="flex gap-2 items-center font-semibold py-2 px-3 text-red-500 hover:bg-red-600 hover:text-white border-t border-t-tema-2"
                >
                  <LogOut size={16} strokeWidth={3} />
                  Log out
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="content p-5">{children}</div>
    </div>
  );
}
