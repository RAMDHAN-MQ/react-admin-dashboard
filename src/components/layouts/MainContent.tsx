import {
  Bell,
  ChevronDown,
  LogOut,
  Moon,
  PanelLeft,
  Settings,
  Sun,
  User,
} from "lucide-react";
import IconButton from "../ui/IconButton";
import Breadcrumb from "../ui/Breadcrumb";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import NotificationItem from "../ui/NotificationItem";

type Props = {
  onClose: () => void;
  onDarkMode: () => void;
  isDark: boolean;
  children: ReactNode;
};

export default function MainContent({
  children,
  onClose,
  onDarkMode,
  isDark,
}: Props) {
  const [isDrop, setIsDrop] = useState({
    profile: false,
    notifikasi: false,
  });

  const profileRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleCloseNotif(event: MouseEvent) {
      const target = event.target as Node;

      if (
        !profileRef.current?.contains(target) &&
        !notifRef.current?.contains(target)
      ) {
        setIsDrop({
          notifikasi: false,
          profile: false,
        });
      }
    }

    document.addEventListener("mousedown", handleCloseNotif);
  }, []);

  const [notif, setNotif] = useState([
    {
      id: 1,
      type: "tambah",
      judul: "Stok Mayonnaise bertambah 18",
      waktu: 30,
      read: true,
    },
    {
      id: 2,
      type: "habis",
      judul: "Stok Mayonnaise habis",
      waktu: 400,
      read: true,
    },
    {
      id: 3,
      type: "beli",
      judul: "Max membeli Mayoonaise 13",
      waktu: 4000,
      read: true,
    },
    {
      id: 4,
      type: "beli",
      judul: "James membeli Tuna Fish 4",
      waktu: 9000,
      read: false,
    },
    {
      id: 5,
      type: "habis",
      judul: "Stok Tattoo Kit habis",
      waktu: 90000,
      read: false,
    },
  ]);

  function handleReadNotif(id: number) {
    setNotif((prev) =>
      prev.map((e) => (e.id === id ? { ...e, read: false } : e)),
    );
  }

  return (
    <div className="main-content bg-tema-1 flex-1 min-w-0 h-screen flex flex-col dark:bg-tema-4">
      <div className="nav border-b border-b-tema-2 flex items-center justify-between h-16 shrink-0 p-5 dark:border-b-tema-3">
        <div className="nav-kiri flex gap-2 items-center font-semibold text-sm">
          <IconButton
            icon={<PanelLeft size={20} />}
            variant="primary"
            onClick={onClose}
          />
          <Breadcrumb />
        </div>
        <div className="nav-kanan flex gap-1 items-center text-white">
          <IconButton
            icon={isDark ? <Sun size={20} /> : <Moon size={20} />}
            onClick={onDarkMode}
          />
          <div className="relative" ref={notifRef}>
            <IconButton
              icon={<Bell size={20} />}
              onClick={() =>
                setIsDrop((e) => ({
                  profile: false,
                  notifikasi: !e.notifikasi,
                }))
              }
              count={notif.filter((e) => e.read).length}
            />
            {isDrop.notifikasi && (
              <div className="flex flex-col my-2 rounded absolute bg-white dark:bg-tema-3-shadow w-96 right-0 top-full shadow max-h-80">
                <div className="px-5 py-3 border-b border-b-tema-2 text-gray-700 dark:text-white">
                  Notifikasi
                </div>
                <ul className="overflow-y-scroll scrollbar-thin scrollbar-thumb-primary">
                  {notif.map((e) => (
                    <NotificationItem
                      key={e.id}
                      id={e.id}
                      judul={e.judul}
                      waktu={e.waktu}
                      type={e.type}
                      read={e.read}
                      onRead={handleReadNotif}
                    />
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="relative" ref={profileRef}>
            <button
              className="flex items-center gap-2 cursor-pointer rounded py-2 px-3 text-sm bg-gray-500/10 text-gray-700 dark:bg-tema-3 dark:hover:bg-tema-3-shadow dark:text-white"
              onClick={() =>
                setIsDrop((e) => ({
                  profile: !e.profile,
                  notifikasi: false,
                }))
              }
            >
              <span className="inline-flex items-center justify-center shrink-0 select-none rounded-full align-middle size-7 text-sm">
                <img
                  src="https://picsum.photos/200"
                  className="h-full w-full rounded-[inherit] object-cover"
                />
              </span>
              <span className="font-semibold">Ramdhan</span>
              <ChevronDown size={16} strokeWidth={2} />
            </button>
            {isDrop.profile && (
              <div className="flex flex-col my-2 rounded absolute bg-white dark:bg-tema-3-shadow w-44 right-0 top-full shadow">
                <Link
                  to="settings/profile"
                  className="flex gap-2 items-center px-3 py-2 text-gray-700 hover:bg-gray-200 dark:hover:bg-tema-3 dark:text-white"
                >
                  <User size={16} />
                  Profile
                </Link>
                <Link
                  to="settings/tampilan"
                  className="flex gap-2 items-center px-3 py-2 text-gray-700 hover:bg-gray-200 dark:hover:bg-tema-3 dark:text-white"
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

      <div className="content flex-1 min-h-0 overflow-y-auto scrollbar-thin scrollbar-thumb-primary p-5">
        {children}
      </div>
    </div>
  );
}
