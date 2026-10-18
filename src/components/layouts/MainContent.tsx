import { Bell, ChevronDown, Moon, PanelLeftClose, User } from "lucide-react";
import IconButton from "../ui/IconButton";
import Breadcrumb from "../ui/Breadcrumb";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function MainContent({ children }: Props) {
  return (
    <div className="main-content bg-tema-4 flex-1">
      <div className="nav border-b border-b-tema-3 flex items-center justify-between h-16 p-5">
        <div className="nav-kiri flex gap-2 items-center font-semibold text-sm">
          <IconButton
            icon={<PanelLeftClose size={20} />}
            variant="text-primary"
            onClick={() => {}}
          />
          <Breadcrumb />
        </div>
        <div className="nav-kanan flex gap-1 items-center text-white ">
          <IconButton icon={<Moon size={20} />} variant="" onClick={() => {}} />
          <IconButton icon={<Bell size={20} />} variant="" onClick={() => {}} />
          <button className="profile flex items-center gap-2 cursor-pointer rounded py-2 px-3 bg-tema-3 text-sm">
            <User size={20} />
            <span>Ramdhan</span>
            <span className="text-xs">
              <ChevronDown size={16} strokeWidth={2} />
            </span>
          </button>
        </div>
      </div>

      <div className="content p-5">{children}</div>
    </div>
  );
}
