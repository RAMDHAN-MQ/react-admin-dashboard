import { BookUser, LayoutDashboard, Package, Truck, User } from "lucide-react";
import ItemMenu from "../ui/ItemMenu";

export default function Sidebar() {
  return (
    <div className="side-kiri bg-tema-4 w-64 border-r border-r-tema-3">
      <div className="nav border-b border-b-tema-3 h-16 py-5 px-6">
        <span className="text-xl font-semibold text-white">Admin</span>
      </div>

      <div className="menu text-gray-400 font-semibold text-sm">
        <div className="menu-item my-5">
          <ItemMenu
            logo={<LayoutDashboard size={20} />}
            text={"Dashboard"}
            to="/"
          />
        </div>
        <div className="menu-item my-5">
          <span className="px-5">MASTER</span>
          <ItemMenu logo={<Truck size={20} />} text={"Pesanan"} to="master/pesanan" />
          <ItemMenu logo={<Package size={20} />} text={"Produk"} to="master/produk" />
          <ItemMenu
            logo={<BookUser size={20} />}
            text={"Pembeli"}
            to="master/pembeli"
          />
          <ItemMenu logo={<User size={20} />} text={"Users"} to="master/users" />
        </div>
      </div>
    </div>
  );
}
