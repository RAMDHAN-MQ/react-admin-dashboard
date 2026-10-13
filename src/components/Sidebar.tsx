import ItemMenu from "./ItemMenu";

export default function Sidebar() {
  return (
    <div className="side-kiri bg-tema-4 w-64 border-r border-r-tema-2">
      <div className="nav border-b border-b-tema-2 h-16 py-5 px-6">
        <span className="text-xl font-semibold text-white">Admin</span>
      </div>

      <div className="menu text-gray-300 text-sm">
        <div className="menu-item my-5">
          <span className="px-5">DASHBOARD</span>
          <ItemMenu logo={"L"} text={"Menu 1"} />
          <ItemMenu logo={"L"} text={"Menu 2"} />
        </div>
        <div className="menu-item my-5">
          <span className="px-5">MASTER</span>
          <ItemMenu logo={"L"} text={"Menu 1"} />
          <ItemMenu logo={"L"} text={"Menu 2"} />
          <ItemMenu logo={"L"} text={"Menu 3"} />
          <ItemMenu logo={"L"} text={"Menu 4"} />
        </div>
      </div>
    </div>
  );
}
