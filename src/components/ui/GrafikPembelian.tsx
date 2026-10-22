import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
} from "recharts";
import { row } from "../../data/DataPemesanan";

export default function GrafikPembelian() {
  const urutan = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const grafikPembelian = Object.values(
    row
      .map((e) => e.tanggal.slice(3, 6))
      .reduce<Record<string, { bulan: string; jumlah: number }>>(
        (acc, item) => {
          if (!acc[item]) {
            acc[item] = {
              bulan: item,
              jumlah: 0,
            };
          }

          acc[item].jumlah += 1;

          return acc;
        },
        {},
      ),
  );

  const datasUrut = grafikPembelian.sort(
    (a, b) => urutan.indexOf(a.bulan) - urutan.indexOf(b.bulan),
  );

  return (
    <div className="w-full h-full">
      <h2 className="text-xl font-semibold mb-4 dark:text-white">
        Grafik Pembelian per Bulan
      </h2>

      <ResponsiveContainer width="100%" height="85%">
        <AreaChart data={datasUrut}>
          <defs>
            <linearGradient id="warna" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#008bff" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#008bff" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bulan" stroke="#008bff" />
          <YAxis width="auto" stroke="#008bff" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="jumlah"
            stroke="#008bff"
            activeDot={{ stroke: "#008bff" }}
            fillOpacity={1}
            fill="url(#warna)"
            animationBegin={200}
            animationDuration={1300}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
