export default function App() {
  return (
    <div className="flex h-screen">
      <div className="side-kiri bg-tema-3 w-64 border-r border-r-tema-2">
        <div className="nav border-b border-b-tema-2 h-16 p-5">
          <span className="text-xl font-semibold text-white">Admin</span>
        </div>
      </div>
      <div className="side-kanan bg-tema-4 flex-1">
        <div className="nav border-b border-b-tema-2 flex items-center justify-between h-16 p-5">
          <div className="nav-kiri flex gap-2 items-center font-semibold">
            <button className="text-tema-4 cursor-pointer bg-tema-2 px-2 py-0 rounded">
              +
            </button>
            <span className="text-gray-400">Dashboard</span>
            <span className="text-gray-400">&gt;</span>
            <span className="text-primary">Penjualan</span>
          </div>
          <div className="nav-kanan flex gap-2 items-center font-semibold text-white">
            <button className="flex items-center gap-2 cursor-pointer">
              <span>Ramdhan</span>
              <span className="">&#x2304;</span>
            </button>
          </div>
        </div>

        <div className="content p-5">
          <div className="welcome-banner bg-primary rounded-xl p-5 text-white">
            <h1 className="text-2xl font-semibold">Selamat Datang, Admin</h1>
            <small>Sudah terbeli 10 hari ini!</small>
          </div>
        </div>
      </div>
    </div>
  );
}
