export default function Dashboard() {
  return (
    <>
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
    </>
  );
}
