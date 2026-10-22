import { Cell, Pie, ResponsiveContainer, PieChart } from "recharts";

export default function CapaianBulanan() {
  const capaian = 20000000;
  const pendapatanSekarang = 11000000;
  const persen = Math.floor((pendapatanSekarang / capaian) * 100);

  const data = [
    { nama: "Tercapai", nilai: Math.min(persen, 100) },
    { nama: "Belum Tercapai", nilai: 100 - Math.min(persen, 100) },
  ];

  return (
    <>
      <div className="relative mx-auto h-56 w-full max-w-xs">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="nilai"
              nameKey="nama"
              cx="50%"
              cy="50%"
              innerRadius="72%"
              outerRadius="90%"
              startAngle={90}
              endAngle={-270}
              stroke="none"
            >
              <Cell fill="#008bff" />
              <Cell fill="#e5e7eb" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-3xl font-bold dark:text-white">{persen}%</span>
          <span className="text-sm text-gray-500 dark:text-gray-300">Tercapai</span>
        </div>
      </div>

      <div className="mt-3 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-300">Pendapatan sekarang</p>
        <p className="text-xl font-semibold dark:text-white">
          Rp{pendapatanSekarang},-
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-300">dari Rp{capaian},-</p>
      </div>
    </>
  );
}
