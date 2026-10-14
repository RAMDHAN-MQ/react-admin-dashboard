import { BookUser, LayoutDashboard, Package, Truck, User } from "lucide-react";
import ItemMenu from "./ItemMenu";

export default function Sidebar() {
  return (
    <div className="side-kiri bg-tema-4 w-64 border-r border-r-tema-2">
      <div className="nav border-b border-b-tema-2 h-16 py-5 px-6">
        <span className="text-xl font-semibold text-white">Admin</span>
      </div>

      <div className="menu text-gray-300 text-sm">
        <div className="menu-item my-5">
          <ItemMenu logo={<LayoutDashboard size={20} />} text={"Dashboard"} />
        </div>
        <div className="menu-item my-5">
          <span className="px-5">MASTER</span>
          <ItemMenu logo={<Truck size={20} />} text={"Pesanan"} />
          <ItemMenu logo={<Package size={20} />} text={"Produk"} />
          <ItemMenu logo={<BookUser size={20} />} text={"Pembeli"} />
          <ItemMenu logo={<User size={20} />} text={"Users"} />
        </div>
      </div>
    </div>
  );
}
