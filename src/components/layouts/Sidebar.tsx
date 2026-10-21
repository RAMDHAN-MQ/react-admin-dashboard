import {
  BookUser,
  LayoutDashboard,
  Package,
  Palette,
  Truck,
  User,
  UserRoundStar,
} from "lucide-react";
import ItemMenu from "../ui/ItemMenu";

type Props = {
  isClose: boolean;
};

export default function Sidebar({ isClose }: Props) {
  return (
    <div
      className={`bg-tema-4 ${isClose ? "w-16" : "w-64"} border-r border-r-tema-3 overflow-y-auto scrollbar-thin scrollbar-thumb-primary duration-300`}
    >
      <div
        className={`nav border-b border-b-tema-3 h-16 ${isClose ? "justify-center" : "px-5 gap-2"} flex items-center`}
      >
        <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary text-white font-bold text-sm">
          A
        </span>
        {!isClose && (
          <span className="text-xl font-semibold text-white">Admin</span>
        )}
      </div>

      <div className="menu text-gray-400 font-semibold text-sm">
        <div className="menu-item my-5">
          <ItemMenu
            logo={<LayoutDashboard size={20} />}
            text={"Dashboard"}
            to="/"
            isClose={isClose}
          />
        </div>
        <div className="menu-item my-5">
          <span className="px-5">{isClose ? "" : "MASTER"}</span>
          <ItemMenu
            logo={<Truck size={20} />}
            text={"Pesanan"}
            to="master/pesanan"
            isClose={isClose}
          />
          <ItemMenu
            logo={<Package size={20} />}
            text={"Produk"}
            to="master/produk"
            isClose={isClose}
          />
          <ItemMenu
            logo={<BookUser size={20} />}
            text={"Pembeli"}
            to="master/pembeli"
            isClose={isClose}
          />
          <ItemMenu
            logo={<UserRoundStar size={20} />}
            text={"Users"}
            to="master/users"
            isClose={isClose}
          />
        </div>
        <div className="menu-item my-5">
          <span className="px-5">{isClose ? "" : "SETTINGS"}</span>
          <ItemMenu
            logo={<User size={20} />}
            text={"Profile"}
            to="settings/profile"
            isClose={isClose}
          />
          <ItemMenu
            logo={<Palette size={20} />}
            text={"Tampilan"}
            to="settings/tampilan"
            isClose={isClose}
          />
        </div>
      </div>
    </div>
  );
}
