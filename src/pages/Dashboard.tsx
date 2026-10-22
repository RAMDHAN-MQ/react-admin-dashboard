import GrafikPembelian from "../components/ui/GrafikPembelian";
import PembelianTerbaru from "../components/ui/PembelianTerbaru";
import TopProducts from "../components/ui/TopProducts";
import { pembelian as detailPembelian } from "../data/DataPembelianDetail";
import { row } from "../data/DataPemesanan";

export default function Dashboard() {
  const topProducts = Object.values(
    detailPembelian.reduce<Record<string, { barang: string; jumlah: number }>>(
      (acc, item) => {
        if (!acc[item.barang]) {
          acc[item.barang] = {
            barang: item.barang,
            jumlah: 0,
          };
        }

        acc[item.barang].jumlah += item.jumlah;
        return acc;
      },
      {},
    ),
  ).sort((a, b) => b.jumlah - a.jumlah);

  const terbaru = row
    .map((e) => {
      const data = {
        order: e.id,
        tanggal: e.tanggal,
        status: e.status,
      };

      return data;
    })
    .slice(-5);

  return (
    <>
      <div className="welcome-banner rounded-xl p-5 text-white bg-linear-to-r from-indigo-500 to-blue-500 shadow-sm">
        <h1 className="text-2xl font-semibold">Selamat Datang, Admin</h1>
        <small>
          Sudah terbeli <span className="font-bold">10 Barang</span> hari ini!
        </small>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 gap-4 mt-4">
        <div className="bg-white shadow-sm dark:bg-tema-3-shadow p-5 rounded-xl col-span-2">
          <GrafikPembelian />
        </div>
        <div className="bg-white shadow-sm dark:bg-tema-3-shadow p-5 rounded-xl row-span-2 col-start-3">
          <h2 className="text-xl font-semibold dark:text-white">
            Produk Terlaris
          </h2>
          {topProducts.map((e, i) => (
            <TopProducts key={i} item={e} />
          ))}
        </div>
        <div className="bg-white shadow-sm dark:bg-tema-3-shadow p-5 rounded-xl row-start-2">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">
            Pembelian Terbaru
          </h2>
          {terbaru.map((e, i) => (
            <PembelianTerbaru
              key={i}
              order={e.order}
              tanggal={e.tanggal}
              status={e.status}
            />
          ))}
        </div>
        <div className="bg-white shadow-sm dark:bg-tema-3-shadow p-5 rounded-xl row-start-2">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">
            Capaian Bulanan
          </h2>
        </div>
      </div>
    </>
  );
}
